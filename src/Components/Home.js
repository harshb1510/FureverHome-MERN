import React from 'react'
import Header from '../Components/Header/Header';
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/Carousel";
import Facts from "../Components/Facts/Facts";
import Feature from "../Components/Features/Feature";
import Contact from "../Components/Contact/Contact"
import Testimonials from './Testimonials/Testimonials';
const Home = () => {
  return (
    <>
  <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Facts/>
      </div>
      <div>
        <Feature />
      </div>
      <div >
        <Testimonials/>
      </div>
        <div>
        <Contact/>
        </div>
       

    </>
  )
}

export default Home
