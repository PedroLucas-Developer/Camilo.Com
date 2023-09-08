import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({ projeto, closeModal }) {
  return (
    <AnimatePresence >
      {projeto && (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[100] flex justify-center items-center bg-black bg-opacity-50 max-[800px]:w-full">
          <div className="w-full fixed flex items-center justify-center">
            <div className="bg-white w-9/12 mx-auto rounded shadow-lg p-4 dark:bg-[#252529] max-[800px]:w-11/12">
              <div className='w-full flex flex-row justify-between items-center'>
                <p className='text-[15px]'>{projeto.ano}</p>
                <button onClick={() => closeModal(null)} className="px-4 py-2 bg-[#ff0000] text-white rounded-lg hover:bg-opacity-80 transition-colors">&times;</button>
              </div>
              <div className="max-h-[25.5rem] overflow-y-auto">
                <h2 className='py-5 text-[15px] text-justify;'>{projeto.titulo}</h2>
                <p className='text-[15px] mb-1'>Descrição:</p>
                <p className='text-[15px]'>{projeto.descricao}</p>
                <p className='py-5  text-[15px]'>Status: {projeto.status}</p>
                <p className=' text-[15px]'>natureza: {projeto.natureza}</p>
                <p className='py-5  text-[15px]'>alunos Envolvidos: {projeto.alunosEnvolvidos}</p>
                <p className=' text-[15px]'>natureza: {projeto.integrantes}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}