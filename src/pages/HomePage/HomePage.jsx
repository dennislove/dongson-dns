import React from 'react'
import Interview from '../../components/HomeComponent/Interview'
import Project from '../../components/Project/Project'
import Tourament from '../../components/Tour/Tourament'
import SlideMember from '../../components/MemberCT/SlideMember'
import Footer from '../../components/Footer/Footer'

function HomePage() {
  return (
    <div className='bg-[#000022] relative'>
      <Interview/>
      <Project/>
      <Tourament/>
      <SlideMember/>
      <Footer/>
    
    </div>
  )
}

export default HomePage
