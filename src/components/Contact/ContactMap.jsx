import React from 'react'

function ContactMap() {
  return (
     <div className='border p-5 '>
         <div className='flex flex-col gap-6 mt-6'>
            <div className='text-yellow-600 text-center'>
              <h3 className='font-oxa font-bold text-3xl'>ĐÔNG SƠN EVENTS & TRAVELS</h3>
              <h3 className='font-pop font-normal text-xl'>Giới hạn là bầu trời</h3>
            </div>
            
              <div className='flex text-white gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
            <h3 className='font-pop font-semibold text-xl'>Địa chỉ:</h3>
            <h3 className='font-pop font-normal text-xl'>P. Bắc Sơn, TP. Sầm Sơn, tỉnh Thanh Hóa</h3>
              </div>
              <div className='flex text-white gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
    
            <h3 className='font-pop font-semibold text-xl'>Số điện thoại:</h3>
            <h3 className='font-pop font-normal text-xl'>0983.378.939 -
            0971.729.698</h3>
              </div>
              <div className='flex text-white gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
    
            <div className='flex sm:flex-row pm:flex-col gap-1'>
              <h3 className='font-pop font-semibold text-xl'>Email:</h3>
              <h3 className='font-pop font-normal text-xl'>dongsonevent.travel@gmail.com</h3>
            </div>
              </div>
            
            <div className='mx-auto'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10621.689110174419!2d105.89047137841382!3d19.740950774082062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136512290d45bef%3A0xb2e5521afb344580!2zNzIgVOG7kW5nIER1eSBUw6JuLCBQLiBC4bqvYyBTxqFuLCBT4bqnbSBTxqFuLCBUaGFuaCBIb8OhLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1720084272653!5m2!1svi!2s"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='lg:w-[600px] lg:h-[400px] md:w-[400px] md:h-[360px] sm:w-[500px] sm:h-[450px] pm:w-[270px] pm:h-[300px]'></iframe>
            </div>
         </div>
        </div>
  )
}

export default ContactMap
