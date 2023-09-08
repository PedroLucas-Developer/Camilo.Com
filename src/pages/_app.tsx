import Head from 'next/head';

import Projects from './Projects';
import Doubts from './Doubts';
import About from './About';

import '../styles/global.css'


// Renderiza A landing Page
const App = () => {
  return (
    <div className='m-0	p-0 min-h-screen inset-y-0 inset-x-0 outline-none box-border font-sans'>
      <Head>
        <title>Camilo.Com</title>
        <link rel='shortcut icon' href='/imagens/c.ico' />
      </Head>
      <About />
      <Projects />
      <Doubts />
    </div>
  );
};

export default App; 