import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const FormDoubts = () => {
  const [Menssagem, setMenssagem] = useState("");
  const [MessageReturn, setMessageReturn] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
          setMessageReturn('font-[10px} pt-2 font-bold text-[#00ff37]');
          setMenssagem('Duvida enviada com sucesso')
      }, (error) => {
          console.log(error.text);
          setMessageReturn('font-[10px} pt-2 font-bold text-[#ff0000]');
          setMenssagem('Erro ao enviar a duvida');
      });
  };

  return (
    <div className='w-full h-full bg-[#f1f1f1] drop-shadow-xl flex justify-center items-center shadow-lg rounded-lg transition-transform transform duration-400 hover:scale-105 dark:bg-[#0c2364]'>
      <form className='flex flex-col w-11/12 p-2 my-8' ref={form} onSubmit={sendEmail}>
        <label className='font-[20px} pt-3 pb-1 dark:text-white'>Nome:</label>
        <input className='border-b-[3px] border-black font-[15px} dark:text-white dark:bg-[#051130] dark:border-white' type="text" name="user_nome" />
        <label className='font-[20px} pt-3 pb-1 dark:text-white'>Email:</label>
        <input className='border-b-[3px] border-black font-[15px} dark:text-white dark:bg-[#051130] dark:border-white' type="email" name="user_email" />
        <label className='font-[20px} pt-3 pb-1 dark:text-white'>Duvida:</label>
        <textarea className='border-b-[3px] border-black resize-none font-[15px} dark:text-white dark:bg-[#051130] dark:border-white' rows={6} name="doubts" />
        <input className='bg-[#0c2364] rounded-lg cursor-pointer text-white p-2 my-3 font-bold duration-300 hover:scale-105 dark:bg-white dark:text-[#0c2364]' type="submit" value="Enviar Duvida" />
        <p className='font-[10px} text-gray dark:text-white'>*Caso seja mais facil enviar uma imagem use o <a href='https://imgur.com/' target='_black' rel="noopener" className='bg-blue-70 font-bold underline'>Imgur</a> e coloque apenas cole o link na duvida.</p>
        <p className={MessageReturn}>{Menssagem}</p>
      </form>
    </div>
  );
};