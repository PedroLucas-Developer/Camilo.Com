import Image from 'next/image';

import Camilo from '../../public/imagens/camilo.jpg';

export default function About() {
  return (
   <div id='About' className='flex w-full my-20 flex-row items-center justify-center'>
     <div className='flex w-11/12 pt-10 flex-row items-center justify-center bg-[#0c2364] p-5 max-w-screen-lg max-[800px]:w-full max-[800px]:flex-col' >
        <div className='w-2/4 relative flex justify-center items-center max-[800px]:w-full'>
          <Image className='w-[400px] absolute mt-28 max-[1000px]:m-0 max-[800px]:relative' src={Camilo} alt='Imagem de Francisco Camilo' />
        </div>
        <div className='w-2/4 p-5 flex max-[800px]:w-full max-[800px]:p-0 max-[800px]:mt-5'>
          <div className='w-11/12 flex-col max-[800px]:w-full'>
            <p className='text-white font-bold'>
              Sobre Mim
            </p>
            <div className='my-5'>
              <p className='text-[24px] text-white font-bold'>
                Professor de Matemática e Engenharia Mecânica comprometido com o sucesso dos alunos.
              </p>
              <p className='mt-5 text-sm text-white'>
              Professor do Instituto Federal do Ceará, apaixonado por Matemática e Engenharia Mecânica, comprometido em inspirar alunos a alcançar seu potencial máximo. Busca contribuir para o crescimento acadêmico e profissional, incentivando o pensamento crítico e a busca pelo conhecimento.
              </p>
            </div>
            <div>
              <a className='font-bold text-white underline' href="http://lattes.cnpq.br/9587183503067118" target='_blank' rel="noopener noreferrer">Curriculo Lattes</a>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
}