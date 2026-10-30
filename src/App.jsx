import './App.css'
import './index.css'

import Navbar from './components/navbar'
import Footer from './components/footer'

import Hero from './sections/hero'
import About from './sections/about'
import Info from './sections/info'
import WhyUs from './sections/whyus'
import Products from './sections/products'
import Package from './sections/package'
import Ratings from './sections/ratings'
import FAQ from './sections/faq'
import ContactUs from './sections/contactus'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Info />
        <WhyUs />
        <Products />
        <Package />
        <Ratings />
        <FAQ />
        <ContactUs />
      </main>

      <Footer />
    </>
  )
}

export default App
