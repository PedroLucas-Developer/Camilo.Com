import { motion } from "framer-motion";

export default function ProjectCard({projeto, openModal}) {
  return (
    <motion.div onClick={() => openModal(projeto)} className="bg-white flex items-center w-full h-[300px] border-2 border-black drop-shadow-xl shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 duration-400">
      <div className='p-4 h-2/4 flex text-center justify-center flex-col w-full h-[250px]'>
        <p className='text-[14px] h-[20%] pb-5'>{projeto.ano}</p>
        <div className="flex justify-center items-center h-[60%] text-center">
          <p className="text-[14px] font-bold break-words">{projeto.titulo}</p>
        </div>
        <p className='text-[15px] h-[20%] pt-5'>{projeto.natureza}</p>
      </div>
    </motion.div>
  );
}