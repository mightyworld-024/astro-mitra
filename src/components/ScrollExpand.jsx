import { useCallback, useEffect, useRef } from 'react'

const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max)

const smoothstep = (edge0, edge1, value) => {
  const t = clamp((value - edge0) / (edge1 - edge0 || 0.000001), 0, 1)
  return t * t * (3 - 2 * t)
}

function ScrollExpand({
  src = '',
  mediaType = 'image',
  poster = '',
  alt = '',
  title = '',
  scrollHint = '',
  startWidth = 42,
  startHeight = 58,
  startRadius = 24,
  endRadius = 0,
  mediaZoom = 1.35,
  scrollDistance = 1.2,
  holdDistance = 0.35,
  smoothing = 0.1,
  overlayScrim = 0.45,
  useWindowScroll = false,
  enabled = true,
  children,
  className = '',
  style,
  ...rest
}) {
  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const stageRef = useRef(null)
  const frameRef = useRef(null)
  const mediaRef = useRef(null)
  const titleRef = useRef(null)
  const overlayRef = useRef(null)
  const scrimRef = useRef(null)
  const hintRef = useRef(null)

  const propsRef = useRef({})

  propsRef.current = {
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    mediaZoom,
    scrollDistance,
    holdDistance,
    smoothing,
    overlayScrim,
    useWindowScroll,
    enabled,
  }

  const applyProgress = useCallback((progress) => {
    const frame = frameRef.current
    const media = mediaRef.current

    if (!frame || !media) return

    const config = propsRef.current
    const progressSmooth = smoothstep(0, 1, progress)

    const width =
      config.startWidth + (100 - config.startWidth) * progressSmooth

    const height =
      config.startHeight + (100 - config.startHeight) * progressSmooth

    const insetX = Math.max(0, (100 - width) / 2)
    const insetY = Math.max(0, (100 - height) / 2)

    const radius =
      config.startRadius +
      (config.endRadius - config.startRadius) * progressSmooth

    frame.style.clipPath =
      `inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${radius}px)`

    const zoom =
      config.mediaZoom + (1 - config.mediaZoom) * progressSmooth

    media.style.transform = `scale(${zoom})`

    if (scrimRef.current) {
      scrimRef.current.style.opacity = String(
        config.overlayScrim * progressSmooth,
      )
    }

    if (titleRef.current) {
      const fade = smoothstep(0.4, 0.88, progress)

      titleRef.current.style.opacity = String(1 - fade)

      titleRef.current.style.transform =
        `translate3d(0, ${-28 * fade}px, 0) scale(${1 + 0.06 * fade})`
    }

    if (hintRef.current) {
      const fade = smoothstep(0, 0.12, progress)

      hintRef.current.style.opacity = String(1 - fade)

      hintRef.current.style.transform =
        `translate3d(0, ${8 * fade}px, 0)`
    }

    if (overlayRef.current) {
      const fade = smoothstep(0.68, 1, progress)

      overlayRef.current.style.opacity = String(fade)

      overlayRef.current.style.transform =
        `translate3d(0, ${18 * (1 - fade)}px, 0)`
    }
  }, [])

  useEffect(() => {
    const root = rootRef.current
    const track = trackRef.current
    const stage = stageRef.current

    if (!root || !track || !stage) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let rafId = 0
    let current = 0
    let target = 0
    let stageHeight = 0
    let running = false

    const measure = () => {
      const config = propsRef.current

      stageHeight = config.useWindowScroll
        ? window.innerHeight
        : root.clientHeight

      if (stageHeight <= 0) return

      stage.style.height = `${stageHeight}px`

      track.style.height =
        `${stageHeight * (
          1 +
          Math.max(0, config.scrollDistance) +
          Math.max(0, config.holdDistance)
        )}px`

      const width = root.clientWidth || stageHeight

      stage.style.setProperty(
        '--se-title-size',
        `${clamp(width * 0.075, 20, 84)}px`,
      )
    }

    const readProgress = () => {
      const config = propsRef.current

      if (!config.enabled) return 1

      const span = stageHeight * Math.max(0.01, config.scrollDistance)

      if (config.useWindowScroll) {
        const top = track.getBoundingClientRect().top

        return clamp(-top / span, 0, 1)
      }

      return clamp(root.scrollTop / span, 0, 1)
    }

    const tick = () => {
      const config = propsRef.current

      const factor =
        config.smoothing <= 0
          ? 1
          : 1 - Math.exp(-1 / (60 * config.smoothing))

      current += (target - current) * factor

      if (Math.abs(target - current) < 0.0004) {
        current = target
        running = false
      }

      applyProgress(current)

      rafId = running ? requestAnimationFrame(tick) : 0
    }

    const startAnimation = () => {
      if (running) return

      running = true

      if (!rafId) {
        rafId = requestAnimationFrame(tick)
      }
    }

    const onScroll = () => {
      target = readProgress()

      if (propsRef.current.smoothing <= 0 || reduceMotion) {
        current = target
        applyProgress(current)
        return
      }

      startAnimation()
    }

    const onResize = () => {
      measure()
      target = readProgress()
      current = target
      applyProgress(current)
    }

    measure()

    target = readProgress()
    current = target

    applyProgress(current)

    const scroller = propsRef.current.useWindowScroll
      ? window
      : root

    scroller.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(root)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)

      scroller.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)

      resizeObserver.disconnect()
    }
  }, [applyProgress, useWindowScroll])

  const media =
    mediaType === 'video' ? (
      <video
        ref={mediaRef}
        className="absolute inset-0 h-full w-full origin-center select-none object-cover [will-change:transform]"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img
        ref={mediaRef}
        className="absolute inset-0 h-full w-full origin-center select-none object-cover [will-change:transform]"
        src={src}
        alt={alt}
        draggable={false}
      />
    )

  return (
    <div
      ref={rootRef}
      className={`relative h-full w-full ${
        useWindowScroll
          ? ''
          : 'overflow-x-hidden overflow-y-auto overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
      } ${className}`.trim()}
      style={style}
      {...rest}
    >
      <div ref={trackRef} className="relative w-full">
        <div
          ref={stageRef}
          className="sticky top-0 w-full overflow-hidden [--se-title-size:4rem]"
        >
          {/* EXPANDING IMAGE */}
          <div
            ref={frameRef}
            className="absolute inset-0 [clip-path:inset(21%_29%_21%_29%_round_24px)] [will-change:clip-path]"
          >
            {media}

            {/* DARK CINEMATIC OVERLAY */}
            <div
              ref={scrimRef}
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.35))] opacity-0"
            />

            {/* CONTENT REVEALED AFTER EXPANSION */}
            {children && (
              <div
                ref={overlayRef}
                className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-[6%] opacity-0 [will-change:opacity,transform] [&_a]:pointer-events-auto"
              >
                {children}
              </div>
            )}
          </div>

          {/* CENTER TITLE */}
          {title && (
            <div
              ref={titleRef}
              className="pointer-events-none absolute inset-0 m-0 flex items-center justify-center px-[6%] text-center font-bold leading-none tracking-[-0.03em] text-white [font-size:var(--se-title-size)] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] [will-change:opacity,transform]"
            >
              {title}
            </div>
          )}

          {/* SCROLL HINT */}
          {scrollHint && (
            <div
              ref={hintRef}
              className="pointer-events-none absolute inset-x-0 bottom-5 text-center text-[0.8125rem] tracking-[0.12em] text-white/75 [will-change:opacity,transform]"
            >
              {scrollHint}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ScrollExpand