import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {RiMoonFill, RiSunLine} from 'react-icons/ri' 


// O componente DarkModeSwitch cria o botao de darkmode e tambem ativa e desativa essa funcionalidade no site.
const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const handleDarkModeToggle = () => {
    const isDarkModeEnabled = !darkMode;
    setDarkMode(isDarkModeEnabled);

    localStorage.setItem('darkMode', isDarkModeEnabled.toString());

    if (isDarkModeEnabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      {darkMode ?  (<RiMoonFill onClick={handleDarkModeToggle} className="h-6 w-6 text-[#ffffff]" />) : (<RiSunLine onClick={handleDarkModeToggle} className="h-6 w-6 text-[#0c2364]" />) }
    </label>
  );
};

export default DarkModeSwitch;