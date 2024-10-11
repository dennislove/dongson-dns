import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactMap from './ContactMap';
import FormInput from './FormInput';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../Button/Button';

function NewContact() {
  const notify = () => toast.success("Email của bạn đã được gửi thành công!");
  const inputs = [
    {
      id: 1,
      name: "user_name",
      type: "text",
      placeholder: "Họ và Tên",
      errorMessage: "Vui lòng nhập đúng họ tên",
      pattern:"^[A-Za-z0-9]{3,30}$",
      required:true
    },
    {
      id: 2,
      name: "user_tel",
      type: "tel",
      placeholder: "Số điện thoại",
      errorMessage: "Vui lòng nhập đúng số điện thoại",
      pattern:"^0[0-9]{9}",
      required:true
    },
    {
      id: 3,
      name: "user_addr",
      type: "text",
      placeholder: "Địa chỉ",
      errorMessage: "Vui lòng không bỏ trống",
      required:true
    },
    {
      id: 4,
      name: "user_email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Vui lòng nhập đúng email",
      pattern:"^([^\s@]+@[^\s@]+\.[^\s@]+)$",
      required:true
    },
   
  ]
  const [isSent, setIsSent] = useState(false);
  const handleSendEmail = () => {
    // Gửi email...
    setIsSent(true);
  };
  const [values, setValues] = useState({
    username: "",
    phone: "",
    address: "",
    email: "",
  })
  const onChange = (e) =>{
    setValues({...values, [e.target.name]: e.target.value})
  }
 
  const [error, setError] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify()
    emailjs
      .sendForm('service_dongson', 
      'template_mam00r3',
       form.current, {
        publicKey: 'CvbjwskOPXvbtYvm4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
 
  return (
    <div className=" bg-[#000022] pt-10 ">
    <div className=' max-w-[1300px] lg:m-auto  pm:mx-10 relative'>
        <div className='relative text-center '>
            <div className='mb-5 text-center'>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Liên Hệ</h2>
            </div>
            
        </div>
       <div className='grid md:grid-cols-2 pm:grid-cols-1 gap-10'>
        <div className='border p-5 font-inter'>
          <form ref={form} onSubmit={sendEmail}>
               <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 pm:grid-cols-1 gap-5'>
            {inputs.map((input) =>(
               <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
              ))}
               
             </div>
            {/* topic */}
              <div>
                <div className={`w-full border ${error ? 'border-red-500' : 'border-[#cbd5e1]'} rounded-xl focus:text-white focus:border-yellow-600 mt-5`}>
                  <input className='w-full bg-transparent py-4 px-6 text-yellow-50 focus:outline-none' name='title' type='text' placeholder='Chủ đề'/>
                  </div>
              </div>

              {/* message */}
             <div>
                <div className={`w-full border ${error ? 'border-red-500' : 'border-[#cbd5e1]'} rounded-xl focus:text-white focus:border-yellow-600 mt-5`}>
                  <textarea className='w-full bg-transparent border-none border-0 text-yellow-50 py-4 px-6  rounded-xl focus:text-white focus:outline-none'  placeholder='Nội dung' name="message">
                  </textarea>
                </div>
             </div>

        
              <div className='mt-5'>
                <Button onClick={handleSendEmail} name="GỬI ĐI"/>
            
        </div>
        {isSent && <ToastContainer/>}
          </form>
        </div>
       <ContactMap/>
       </div>
    </div>
   
</div>
    )
  }


export default NewContact
