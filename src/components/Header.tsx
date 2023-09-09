import Image from "next/image";

import C from '../../public/imagens/C.png';

import DarkModeSwitch from "./DarkModeSwitch";
import Mobile from "./Mobile";

// Renderiza o Header do Site.
export default function Header() {
  return(
    <div className="flex justify-center">
      <div className="flex w-full flex-row mx-5 justify-between items-center my-2 max-w-screen-lg max-[800px]:hidden">
        {/* Renderiza o Logo. */}
        <div>
          <Image className="W-[40px] h-[40px]" src={C} alt="C logo" />
        </div>
        <div className="flex flex-row justify-between items-center">
          {/* Renderiza a lista de navegacao */}
          <ul className="flex w-[320px] flex-row justify-between">
            <li className="text-[15px] dark:text-white hover:font-bold duration-200">
             <a href="#Home">Home</a>
            </li>
            <li className="text-[15px] dark:text-white hover:font-bold duration-200">
              <a href="#About">Sobre Mim</a>
            </li>
            <li className="text-[15px] dark:text-white hover:font-bold duration-200">
              <a href="#Projects">Projetos</a>
            </li>
            <li className="text-[15px] dark:text-white hover:font-bold duration-200">
              <a href="#Doubts">Duvidas</a>
            </li>
          </ul>
          <div className="w-20 flex justify-center items-center">
            <DarkModeSwitch />
          </div>
        </div>
      </div>
      <div className="min-[801px]:hidden fixed mt-10 flex w-11/12 justify-end z-[100]">
        <Mobile />
      </div>
    </div>
  );
}