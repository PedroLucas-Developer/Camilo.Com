# Camilo.Com

Desenvolvi um site personalizado para o Professor Camilo, focado no ensino de matemática. Esta plataforma oferece recursos interativos e uma área dedicada para que os alunos possam deixar suas dúvidas diretamente com o professor. Com ferramentas de rastreamento de progresso e segurança de dados, garantimos a privacidade dos alunos e o sucesso no ensino. Estou empenhado em aprimorar continuamente essa plataforma, tornando-a uma ferramenta valiosa para o Professor Camilo aprimorar seu ensino de matemática de forma eficaz e colaborativa.

## Estrutura do Diretório

- `/public`: Armazena recursos públicos, como imagens e arquivos estáticos.
- `/src`: Contém o código-fonte do projeto.
- `/src/components` Contém os componentes que foram utilizados no projeto como menu, footer e animacoes.
- `/src/pages` Onde esta localiza as principais partes do codigo.
- `/src/styles` Contem o codigo CSS Global do Tailwind CSS.

## Dependências

- Autoprefixer (v10.4.15)
- Emailjs-com (v3.2.0)
- Framer-Motion (v10.16.1)
- Postcss (v8.4.28)
- React-icons (v4.10.1)
- React-intersection-observer (v9.5.2)
- Tailwind CSS (v3.3.3)

## Instruções de Instalação

Para configurar e executar este projeto localmente, siga as etapas abaixo:

1. Clone o repositório: `git clone https://github.com/PedroLucas-Developer/Camilo.Com`
2. Navegue até o diretório do projeto: `cd Camilo.Com`
3. Instale as dependências: `npm install`
4. Inicie o servidor local: `npm run dev`

Certifique-se de configurar as variáveis de ambiente, como API keys, se necessário.

## Funcionalidades

Animacoes com a Biblioteca Framer Motion.

### Envio de Email

Envio de Email atraves da biblioteca Email.JS, para isso e preciso mudar as variaveis, que se encontram no `/src/components/ContactForm` 

.sendForm( "your_service_id", "your_template_id", e.target, "your_public_key")

essas podem ser conseguidas no site do [Email.js](https://www.emailjs.com/).



