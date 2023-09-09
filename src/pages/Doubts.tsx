import { FormDoubts } from "../components/FormDoubts";
import AnimationDoubts from "../components/animationDoubts";

// Renderiza a pagina de duvidas.
export default function Doubts() {
  return (
    <div id="Doubts" className='flex w-full pb-8 flex-col items-center justify-center'>
      <div className='m-10 text-left max-[500px]:m-6'>
        <h2 className='text-[35px] text-[#0c2364] font-bold max-[500px]:text-[26px] dark:text-white'>Deixe sua duvida:</h2>
      </div>
      <div className='flex w-full p-5 items-center justify-center flex-row max-w-screen-lg max-[800px]:flex-col'>        
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