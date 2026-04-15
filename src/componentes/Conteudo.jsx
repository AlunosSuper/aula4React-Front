import styled from "styled-components";

/* Modelo principal */
const ModeloConteudo = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

/* Modelo da capa do livro */
const ConteudoCapa = styled.img`
  height: 280px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;

/* Modelo do título */
const ConteudoTitulo = styled.div`
  margin: 16px 0;
  text-align: center;
`;

/* Modelo das informações */
const ConteudoInfo = styled.div`
  color: #555;
  font-size: 12pt;
  text-align: center;
`;

/* Componente Conteúdo */
export function Conteudo({ capa, titulo, genero, ano, autor }) {
  return (
    <ModeloConteudo>
      <ConteudoCapa src={capa} alt="Capa do livro" />

      <ConteudoTitulo>
        {titulo}
      </ConteudoTitulo>

      <ConteudoInfo>
        {genero.join(", ")}
      </ConteudoInfo>

      <ConteudoInfo>
        {ano}
      </ConteudoInfo>

      <ConteudoInfo>
        {autor}
      </ConteudoInfo>
    </ModeloConteudo>
  );
}