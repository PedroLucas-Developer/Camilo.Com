import Head from 'next/head';
import '../styles/global.css'
import Projects from './Projects';

// Renderiza A landing Page
const App = () => {
  return (
    <div className='m-0	p-0 min-h-screen inset-y-0 inset-x-0 outline-none box-border font-sans'>
      <Head>
        <title>Camilo.Com</title>
        {/* <link rel='shortcut icon' href='/imagens/logoBall.ico' /> */}
      </Head>

    </div>
  );
};

export default App; 