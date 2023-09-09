import Image from 'next/image';
import { useRouter } from 'next/router';

import Professor from '../../public/imagens/professor.png';

// Renderiza a Pagina Home
export default function Home(){
  const router = useRouter();
  
  // Envia o Click do botao para a apagina de duvidas.
  const IrParaDuvida = () => {
    router.push('#Doubts');
  };

  return (
    <div id="Home" className="flex mb-5 justify-center w-full max-[800px]:mt-20">
      <div className="flex justify-center flex-row p-5 w-11/12 items-center max-w-screen-lg max-[800px]:flex-col">
        <div className="w-2/4 items-center max-[800px]:w-full flex-col max-[800px]:flex max-[800px]:justify-center">
          <p className='text-[40px] font-bold max-[800px]:text-center max-[800px]:text-[30px] dark:text-white'>
            Descubra o poder do conhecimento
          </p>
          <p className='text-[20px] mt-3 max-[800px]:text-center dark:text-white'>
            Explore o mundo do conhecimento com o Professor Francisco Camilo da Silva, especialista em Matemática e Engenharia Mecânica. Encontre recursos educacionais e inspire-se para o sucesso acadêmico e profissional.
          </p>
          <button onClick={IrParaDuvida} className='bg-[#0c2364] text-white font-bold text-lg p-2 px-6 m-5 ml-0 rounded-lg dark:text-[#0c2364] dark:bg-white hover:scale-105 duration-400 max-[800px]:ml-5'>
            Enviar Duvida
          </button>
        </div>
        <div className="w-2/4 max-[800px]:w-full">
          <Image className='w-full' src={Professor} alt='Vetor de um professor ministrando uma aula'/>
        </div>
      </div>
    </div>
  );
}