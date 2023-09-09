import { motion } from "framer-motion";

// Renderiza o Card de Projeto
export default function ProjectCard({projeto, openModal}) {
  return (
    <motion.div onClick={() => openModal(projeto)} className="bg-[#f1f1f1] flex items-center w-full h-[300px] drop-shadow-xl shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 duration-400 dark:bg-[#0c2364]">
      <div className='p-4 h-2/4 flex text-center justify-center flex-col w-full h-[250px]'>
        <p className='text-[14px] h-[20%] pb-5 dark:text-white'>{projeto.ano}</p>
        <div className="flex justify-center items-center h-[60%] text-center">
          <p className="text-[14px] font-bold break-words dark:text-white">{projeto.titulo}</p>
        </div>
        <p className='text-[15px] h-[20%] pt-5 dark:text-white'>{projeto.natureza}</p>
      </div>
    </motion.div>
  );
}