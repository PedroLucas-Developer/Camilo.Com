import Head from 'next/head';

import Header from '../components/Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Doubts from './Doubts';
import Footer from '../components/Footer';

import '../styles/global.css'

// Renderiza A landing Page
const App = () => {

  return (
    <div className='m-0	p-0 min-h-screen inset-y-0 inset-x-0 outline-none box-border font-sans dark:bg-[#081e56]'>
      <Head>
        <title>amilo.Com</title>
        <link rel='shortcut icon' href='/imagens/c.ico' />
      </Head>
      <Header />
      <Home />
      <About />
      <Projects />
      <Doubts />
      <Footer />
    </div>
  );
};

export default App; 