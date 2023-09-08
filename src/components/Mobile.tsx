import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DarkModeSwitch from './DarkModeSwitch';

// O componente Mobile renderiza o icone hambuguer e o menu que se aberto.
const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Abre e fecha o menu Mobile.
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="flex flex-col text-3xl cursor-pointer" onClick={toggleMenu}>
        <div className={`w-9 h-1 bg-[#081e56] my-1 rounded-lg transition-transform duration-300 transform origin-center dark:bg-white ${ isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-9 h-1 bg-[#081e56] my-1 rounded-lg transition-opacity duration-300 dark:bg-white ${ isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-9 h-1 bg-[#081e56] my-1 rounded-lg transition-transform duration-300 transform origin-center dark:bg-white ${ isOpen ? 'transform -rotate-45 -translate-y-4 translate-x-0' : ''}`}></div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 25 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} style={{ zIndex: 0 }} className="absolute p-8 right-0 w-11/12 bg-[#f1f1f1] shadow-lg dark:bg-[#081e56]">
            <div>
              <ul className="flex w-[320px] flex-col">
                <li className="text-[20px] mb-2 dark:text-white hover:font-bold hover:text-[#081e56] duration-200">
                  <a href="#Home">Home</a>
                </li>
                <li className="text-[20px] mb-2 dark:text-white hover:font-bold hover:text-[#081e56] duration-200">
                  <a href="#About">Sobre Mim</a>
                </li>
                <li className="text-[20px] mb-2 dark:text-white hover:font-bold hover:text-[#081e56] duration-200">
                  <a href="#Projects">Projetos</a>
                </li>
                <li className="text-[20px] dark:text-white hover:font-bold hover:text-[#081e56] duration-200">
                  <a href="#Doubts">Duvidas</a>
                </li>
              </ul>
            </div>
            <div className='my-5'>
              <DarkModeSwitch  />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;