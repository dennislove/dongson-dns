import React from 'react'
import { HiMapPin,HiPhone ,HiEnvelope  } from "react-icons/hi2";

function ContactMap() {
  return (
     <div className='border p-5 '>
         <div className='flex flex-col gap-6 mt-6'>
            <div className='text-yellow-600 text-center'>
              <h2 className='font-oxa font-bold text-3xl'>ĐÔNG SƠN EVENTS & TRAVELS</h2>
              <h3 className='font-pop font-normal text-xl'>Giới hạn là bầu trời</h3>
            </div>
            
              <div className='flex text-white gap-2'>
              <HiMapPin size={28} />
            <h3 className='font-pop font-semibold text-xl'>Địa chỉ:</h3>
            <h3 className='font-pop font-normal text-xl'>P. Bắc Sơn, TP. Sầm Sơn, tỉnh Thanh Hóa</h3>
              </div>
              <div className='flex text-white gap-2'>
              <HiPhone size={28} />
            <h3 className='font-pop font-semibold text-xl'>Số điện thoại:</h3>
            <h3 className='font-pop font-normal text-xl'>0983.378.939 -
            0971.729.698</h3>
              </div>
              <div className='flex text-white gap-2'>
              <HiEnvelope size={28} />
    
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
