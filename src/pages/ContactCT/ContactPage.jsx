import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker';
import Footer from '../../components/Footer/Footer'
import NewContact from '../../components/Contact/NewContact'

function ContactPage() {
  const { promiseTracker } = usePromiseTracker();
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
