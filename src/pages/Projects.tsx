import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Caixa from '../../public/imagens/geometricas/caixaEsqujsita.png';
import ProjectModal from '../components/projectModal';
import ProjectCard from '../components/projectCard';
import { ButtonNext, ButtonPrevious } from '../components/projectButtons';

export default function Projects() {
  const [projetos, setProjetos] = useState([]);
  const [selectedProjeto, setSelectedProjeto] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Pegando informacoes da informacoes da Api Projetos
  useEffect(() => {
    async function fetchProjetos() {
      const response = await fetch('/api/ApiProjetos');
      const data = await response.json();
      setProjetos(data);
    }

    fetchProjetos();
  }, []);

  // funcoes usadas pra abrir e fechar o Modal com as informacoes detalhadas dos projetos
  function openModal(projeto){
    setSelectedProjeto(projeto);
  };
  function closeModal(){
    setSelectedProjeto(null);
  };
  
  // Contante para calcular o total de paginas.
  const totalPages = Math.ceil(projetos.length / projectsPerPage);

  // Função para lidar com a mudança de página, incluindo o loop.
  const handlePageChange = (newPage) => {
    if (newPage < 1) {
      setCurrentPage(totalPages);
    } else if (newPage > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(newPage);
    }
  };

  // Calcula os índices dos projetos a serem exibidos na página atual.
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  // Filtra os projetos a serem exibidos na página atual.
  const projectsToDisplay = projetos.slice(startIndex, endIndex);

  return (
    <div id='Projects' className='flex w-full py-8 flex-col items-center justify-center'>
      <div className='flex relative justify-start w-11/12 flex-col max-w-screen-lg '>
        <p className='text-[30px] text-blue-700 font-bold' >Meus Projetos_</p>
      </div>
      <div className='flex relative w-full pt-5 items-center justify-center flex-col max-w-screen-lg'>        
        <motion.div className='absolute w-7/12' animate={{ rotate: 360} } transition={{ ease: "linear", duration: 10, repeat: Infinity }}>
          <Image className='w-[45%] h-[45%]' priority={true} src={Caixa} alt=""/>
        </motion.div>
        {/* div dos botoes */}
        <div className='flex flex-row justify-between w-10/12 py-5 min-[801px]:hidden'>
          <ButtonPrevious onClick={() => handlePageChange(currentPage - 1)}/>
          <ButtonNext onClick={() => handlePageChange(currentPage + 1)}/>
        </div>
        {/* Box projetos */}
        <div className='flex flex-row w-full items-center justify-center max-w-screen-lg max-[800px]:w-11/12'>
          <div className='max-[800px]:hidden'>
            <ButtonPrevious onClick={() => handlePageChange(currentPage - 1)}/>
          </div>
          <div className='w-10/12 grid grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1 gap-4 max-[800px]:w-full'>
            {projectsToDisplay.map((projeto) => (
              <ProjectCard projeto={projeto} key={projeto.id} openModal={openModal}/>
            ))}
          </div>
          <div className='max-[800px]:hidden'>
            <ButtonNext onClick={() => handlePageChange(currentPage + 1)}/>
          </div>
        </div>
        {/* div dos botoes */}
        <div className='flex flex-row justify-between w-10/12 py-5 min-[801px]:hidden'>
          <ButtonPrevious onClick={() => handlePageChange(currentPage - 1)}/>
          <ButtonNext onClick={() => handlePageChange(currentPage + 1)}/>
        </div>
        {/* Modal */}
        <ProjectModal projeto={selectedProjeto} closeModal={closeModal} />
      </div>
    </div>
  );
}



