import { motion } from "framer-motion";

export default function ProjectCard({projeto, openModal}) {
  return (
    <motion.div onClick={() => openModal(projeto)} className="w-full h-[300px] border-2 border-[#000000] drop-shadow-xl shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-white flex items-center">
      <div className='p-4 h-2/4 flex text-center justify-center flex-col w-full h-[250px]'>
        <p className='text-[14px] items-start'>{projeto.ano}</p>
        <p className="text-[14px] text-center font-bold break-words">{projeto.titulo}</p>
        <p className='text-[15px]'>{projeto.natureza}</p>
      </div>
    </motion.div>
  );
}