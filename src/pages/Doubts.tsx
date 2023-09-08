import { FormDoubts } from "../components/FormDoubts";
import AnimationDoubts from "../components/animationDoubts";

export default function Doubts() {
  return (
    <div id="Doubts" className='flex w-full pb-8 flex-col items-center justify-center'>
      <div className='flex relative justify-start w-11/12 flex-col max-w-screen-lg '>
        <p className='text-[30px] text-blue-700 font-bold' >Deixe Sua Duvida_</p>
      </div>
      <div className='flex w-full p-5 mt-5 items-center justify-center flex-row max-w-screen-lg max-[800px]:flex-col'>        
        <div className='flex w-2/4 max-[800px]:w-full'>
          <AnimationDoubts />          
        </div>
        <div className='flex w-2/4 p-5 max-[800px]:w-full max-[800px]:px-0'>
          <FormDoubts />
        </div>
      </div>
    </div>
  );
}