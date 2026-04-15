import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Campo } from './componentes/Campo.jsx';
import { Titulo } from './componentes/Titulo.jsx';
import { Conteudo } from './componentes/Conteudo.jsx';

export function Inicio() {
  // Estados para armazenar os códigos dos livros, os conteúdos dos livros, o estado de carregamento e o estado de erro
  const [codigos, setCodigos] = useState([]);
  const [conteudos, setConteudos] = useState({});
  
  // Estados de carregamento e erro
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);


  // useEffect para buscar os dados da API quando o componente for montado
  useEffect(() => { 
    
    async function buscarLivros() { // Função para buscar os livros da API
      setCarregando(true); // Define o estado de carregamento como true antes de iniciar a busca
      try { 
        const resposta = await axios.get("http://localhost:4000/api"); // busca os dados da API
        const dados = resposta.data; // Armazena os dados retornados pela API

        setCodigos(Object.keys(dados)); //Atualiza o estado com os códigos dos livros
        setConteudos(dados); //Atualiza o estado com os conteúdos dos livros, onde a chave é o código do livro e o valor é um objeto com as informações do livro
      } catch (erro) {  // Em caso de erro, define o estado de erro e exibe o erro no console
        setErro("Erro ao carregar os dados");  // Define o estado de erro com uma mensagem
        console.error(erro);
      } finally { // Define o estado de carregamento como false após a tentativa de busca, independentemente do sucesso ou falha
        setCarregando(false);
      }
    }

    buscarLivros(); // Chama a função para buscar os livros da API
  }, []);

    if (carregando) { // Se o estado de carregamento for true, exibe uma mensagem de carregamento
      return <p>Carregando...</p>;
    }
    if (erro) { // Se o estado de erro não for null, exibe a mensagem de erro
      return <p>{erro}</p>;
    }

  return (
    <>
      <Titulo nome="Livros disponíveis" imagem="https://cdn.pixabay.com/photo/2024/02/24/20/54/books-8594725_1280.jpg" />
      
      <Campo>
        {codigos.map(function (codigo) { // Mapeia os códigos dos livros para renderizar o conteúdo de cada livro}
          return (<Conteudo
            key={codigo} // Define a chave única para cada componente Conteudo usando o código do livro
            capa={conteudos[codigo].capa} // Passa a URL da capa do livro
            titulo={conteudos[codigo].titulo} // Passa o título do livro
            genero={conteudos[codigo].genero} // Passa o gênero do livro
            ano={conteudos[codigo].ano} // Passa o ano de publicação do livro
            autor={conteudos[codigo].autor} // Passa o autor do livro
          />);
        })}
      </Campo>
    </>
  );
}