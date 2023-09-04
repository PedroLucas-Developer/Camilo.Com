import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FormDoubts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='w-11/12 h-full drop-shadow-xl flex justify-center shadow-lg rounded-lg border-2 border-black transition-transform transform hover:scale-105 bg-white flex items-center max-[800px]:w-full'>
      <form className='flex flex-col w-11/12 p-2 my-8' ref={form} onSubmit={sendEmail}>
        <label className='font-[20px} pt-3 pb-1'>Name:</label>
        <input className='border-b-[3px] border-black font-[15px}' type="text" name="user_name" />
        <label className='font-[20px} pt-3 pb-1'>Email:</label>
        <input className='border-b-[3px] border-black font-[15px}' type="email" name="user_email" />
        <label className='font-[20px} pt-3 pb-1'>Duvida:</label>
        <textarea className='border-b-[3px] border-black resize-none font-[15px}' rows={6} name="doubts" />
        <input className='bg-green-700 rounded-lg cursor-pointer text-white p-2 my-3 font-bold hover:scale-105' type="submit" value="Enviar Duvida" />
        <p className='font-[10px} text-gray'>*Caso seja mais facil enviar uma imagem use o <a href='https://imgur.com/' target='_black' rel="noopener" className='bg-blue-70 font-bold underline'>Imgur</a> e coloque apenas cole o link na duvida. </p>
      </form>
    </div>
  );
};