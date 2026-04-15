import styled from 'styled-components';

const Banner = styled.header`
  background-image: url(${props => props.imagem});
  height: 300px;
  width: 80vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0 auto;
`;

const Texto = styled.h1`
  color: white; 
  font-size: 3rem;
  
`;

export function Titulo({ nome, imagem }) {
  return (
    <Banner imagem={imagem}>
        <Texto>{nome}</Texto>
    </Banner>
  );
}