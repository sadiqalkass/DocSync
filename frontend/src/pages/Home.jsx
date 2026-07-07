import React from 'react'
import Header from '../component/Header'
import SpeciallytyMenu from '../component/SpeciallytyMenu'
import TopDoctors from '../component/TopDoctors'
import Banner from '../component/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpeciallytyMenu/>
      <TopDoctors/>
      <Banner />
    </div>
  )
}

export default Home
