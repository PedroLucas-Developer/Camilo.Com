import { useRouter } from "next/router";
import Image from "next/image";
import { AiFillInstagram, AiFillLinkedin, AiFillFacebook} from "react-icons/ai";
import Lattes from '../../public/imagens/lattes.png';

//Componente do footer do site.
export default function Footer(){
  return(
    <div className="flex pt-4 justify-center w-full bg-[#0c2364]">
      <div className="flex flex-col justify-center w-full max-w-screen-lg">
        <div className="flex justify-between items-center flex-row max-[800px]:flex-col">
          <div className='p-4 flex-col flex justify-center max-[800px]:text-center'>
            <p className='text-[19px] mb-2 text-white font-bold'>Francisco Camilo Da Silva</p>
            {/* Menu de navegacao do projeto */}
            <div className="flex w-full max-[800px]:justify-center ">
              <ul className="flex w-[250px] flex-row justify-between">
                <li className="text-[13px] text-white hover:font-bold duration-200">
                  <a href="#Home">Home</a>
                </li>
                <li className="text-[13px] text-white hover:font-bold duration-200">
                  <a href="#About">Sobre Mim</a>
                </li>
                <li className="text-[13px] text-white hover:font-bold duration-200">
                  <a href="#Projects">Projetos</a>
                </li>
                <li className="text-[13px] text-white hover:font-bold duration-200">
                  <a href="#Doubts">Duvidas</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Links Das Redes Sociais */}
          <div className="flex justify-center">
            <ul className='grid grid-cols-3 gap-4 mr-4 max-[800px]:mr-0'>
              <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#0c2364] rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110 duration-200'>
                <a href="https://www.instagram.com/ifcecamilo/" target='_blank' rel="noopener noreferrer">
                  <AiFillInstagram className="h-[35px] w-[35px] text-white max-[450px]:h-[30px] max-[450px]:w-[30px]" />
                </a>
              </li>
              <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#0c2364] rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
                <a href="https://www.facebook.com/dsccamilo" target='_blank' rel="noopener noreferrer">
                  <AiFillFacebook className="h-[35px] w-[35px] text-white max-[450px]:h-[30px] max-[450px]:w-[30px]" />
                </a>
              </li>
              <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#0c2364] rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
                <a href="http://lattes.cnpq.br/9587183503067118" target='_blank' rel="noopener noreferrer">
                  <Image src={Lattes} alt="Logo Lattes" className="h-[35px] w-[35px] max-[450px]:h-[30px] max-[450px]:w-[30px]"  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex pt-4 pb-2 justify-center">
          <p className="text-[10px] text-white">Copyright © 2023 Kira.Company</p>
        </div>
      </div>
    </div>
  );
}