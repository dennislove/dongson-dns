import React from 'react'
import Footer from '../../components/Footer/Footer'
import NewContact from '../../components/Contact/NewContact'

function ContactPage() {
 
  return (
    <div className='relative'>
     
      <div>
        <NewContact/>
        <Footer/>
      </div>
     
    </div>
  )
}

export default ContactPage
