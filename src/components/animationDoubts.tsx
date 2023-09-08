import Image from 'next/image';
import { motion } from "framer-motion";

import AnguloReto from '../../public/imagens/geometricas/anguloReto.png';
import Cubo from '../../public/imagens/geometricas/cube.png';
import Octahedron from '../../public/imagens/geometricas/octahedronTwo.png'
import Pyramid from '../../public/imagens/geometricas/pyramidTwo.png'

export default function AnimationDoubts(){
  return (
    <div className='flex w-full h-[550px] rounded bg-green-700 border-amber-900 border-[10px] relative items-center justify-center max-[800px]:h-[320px]'>
      <motion.div className='absolute w-[50%] left-12 max-[800px]:w-[30%] max-[800px]:left-20 max-[500px]:w-[35%]' animate={{ rotate: [20, 50, 20]} } transition={{ ease: "easeInOut", duration: 12, repeat: Infinity }}>
        <Image className='w-full' priority={true} src={AnguloReto} alt="Angulo Reto"/>
      </motion.div>
      <motion.div className='absolute w-[35%] right-10 top-3 max-[800px]:w-[20%] max-[500px]:w-[30%]' animate={{ rotate: [0, 90, 0] } } transition={{ ease: "linear", duration: 12, repeat: Infinity }}>
        <Image className='w-full' priority={true} src={Cubo} alt="Cube"/>
      </motion.div>
      <motion.div className='absolute w-[25%] left-0 top-0 max-[800px]:w-[20%] max-[500px]:w-[30%]' animate={{ rotate: 360} } transition={{ ease: "linear", duration: 12, repeat: Infinity }}>
        <Image className='w-full' priority={true} src={Octahedron} alt="Octahedron"/>
      </motion.div>
      <motion.div className='absolute w-[40%] right-11 bottom-5 max-[800px]:w-[20%] max-[800px]:right-6 max-[500px]:w-[35%]' animate={{ rotate: [0, -45, 0]} } transition={{ ease: "linear", duration: 12, repeat: Infinity }}>
        <Image className='w-full' priority={true} src={Pyramid} alt="Pyramid"/>
      </motion.div>
      <div className='absolute top-2'>
        <p className='text-[30px] text-white font-bold'>E = M x C<sup>2</sup></p>
      </div>
      <div className='absolute bottom-2 left-2'>
        <p className='text-[20px] text-white font-bold'>z<sup>2</sup> + z<sup>2</sup> = (a + c) + (b + d)i</p>
      </div>
      <div className='absolute right-2'>
        <p className='text-[20px] text-white font-bold'>i<sup>25</sup> = i<sup>1</sup> = i</p>
      </div>
      <div className='absolute left-3 top-1/3'>
        <p className='text-[20px] text-white font-bold'>z = 1 + 3i</p>
      </div>
    </div>
  );
}