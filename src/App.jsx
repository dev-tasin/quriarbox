import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import Counter from './components/Counter/Counter'
import Video from './components/Video/Video'
import Testimonial from './components/Testimonial/Testimonial'
import Form from './components/Form/Form'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Update from './components/Update/Update'
import Footercopy from './components/Footercopy/Footercopy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Services></Services>
      <Counter></Counter>
      <Video></Video>
      <Testimonial></Testimonial>
      <Form></Form>
      <Contact></Contact>
      <Update></Update>
      <Footer></Footer>
      <Footercopy></Footercopy>
    </>
  )
}

export default App
