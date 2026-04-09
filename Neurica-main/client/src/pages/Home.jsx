import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'


const Home = () => {
  return (
    <div className='space-y-2 md:space-y-4'>
      <Header />
      <div className='section-spacing'>
        <SpecialityMenu />
      </div>
      <div className='section-spacing'>
        <TopDoctors />
      </div>
      <div className='section-spacing'>
        <Banner />
      </div>
    </div>
  )
}

export default Home
