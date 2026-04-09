import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import Titulo from './componentes/Titulo.jsx'
import Campo from './componentes/Campo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <Titulo nome="Meu Título da pagina" imagem="https://thumbs.dreamstime.com/b/livro-antigo-com-letras-voadoras-e-luz-m%C3%A1gica-sobre-o-fundo-da-estante-na-biblioteca-livros-antigos-como-s%C3%ADmbolo-de-hist%C3%B3ria-do-218640948.jpg" />*/}
   <Campo>
  <div>Item 1</div>
  <div>Item 2</div>
</Campo>
  </StrictMode>,
)
