import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";

// componente com todas as minhas redes sociais ativas.
export function SocialMidia() {
  return (
    <ul className='w-[400px] flex flex-row justify-between flex-wrap mx-5'>
      <li className='h-[55px] w-[55px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110 duration-200'>
        <a href="https://www.instagram.com/pedrolucas.developer/" target='_blank' rel="noopener noreferrer">
          <AiOutlineInstagram className="h-[45px] w-[45px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]" />
        </a>
      </li>
      <li className='h-[55px] w-[55px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110 duration-200'>
        <a href="https://www.linkedin.com/in/pedro-lucas-macedo-de-moraes/" target='_blank' rel="noopener noreferrer">
          <AiFillLinkedin className="h-[45px] w-[45px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]"  />
        </a>
      </li>
      <li className='h-[55px] w-[55px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
        <a href="https://github.com/PedroLucas-Developer" target='_blank' rel="noopener noreferrer">
          <AiFillGithub className="h-[45px] w-[45px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]"  />
        </a>
      </li>
      <li className='h-[55px] w-[55px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
        <a href="https://www.youtube.com/@PedroDevelop" target='_blank' rel="noopener noreferrer">
          <AiFillYoutube className="h-[45px] w-[45px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]" />
        </a>
      </li>
      <li className='h-[55px] w-[55px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
        <a href="https://twitter.com/PedroDevelop" target='_blank' rel="noopener noreferrer">
          <AiOutlineTwitter className="h-[45px] w-[45px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]" />
        </a>
      </li>
    </ul>
  );
};

// componente com todas as minhas redes sociais ativas que aparece no footer.
export function MidiaSocialFooter() {
  return (
    <ul className='grid grid-cols-5 gap-4 mr-4 max-[800px]:mr-0'>
      <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110 duration-200'>
        <a href="https://www.instagram.com/pedrolucas.developer/" target='_blank' rel="noopener noreferrer">
          <AiOutlineInstagram className="h-[35px] w-[35px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]" />
        </a>
      </li>
      <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110 duration-200'>
        <a href="https://www.linkedin.com/in/pedro-lucas-macedo-de-moraes/" target='_blank' rel="noopener noreferrer">
          <AiFillLinkedin className="h-[35px] w-[35px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]"  />
        </a>
      </li>
      <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
        <a href="https://github.com/PedroLucas-Developer" target='_blank' rel="noopener noreferrer">
          <AiFillGithub className="h-[35px] w-[35px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]"  />
        </a>
      </li>
      <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
        <a href="https://www.youtube.com/@PedroDevelop" target='_blank' rel="noopener noreferrer">
          <AiFillYoutube className="h-[35px] w-[35px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]" />
        </a>
      </li>
      <li className='h-[45px] w-[45px] flex items-center justify-center bg-[#ff0000] dark:bg-white rounded-full max-[450px]:h-[40px] max-[450px]:w-[40px] hover:scale-110	duration-200'>
        <a href="https://twitter.com/PedroDevelop" target='_blank' rel="noopener noreferrer">
          <AiOutlineTwitter className="h-[35px] w-[35px] text-white dark:text-[#ff0000] max-[450px]:h-[30px] max-[450px]:w-[30px]" />
        </a>
      </li>
    </ul>
  );
};