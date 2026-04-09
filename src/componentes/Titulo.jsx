import styled from "styled-components";

const Banner = styled.header`
  width: 80vw;          /* ocupa a 80% da tela - view port */
  min-height: 260px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-image: url(${props => props.imagem});
  background-size: cover;
  background-position: center;

  position: relative;

  /* overlay claro */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Conteudo = styled.div`
  position: relative;
  z-index: 1;

  max-width: 70%;        /* foco visual central */
  padding-bottom: 10px;
  text-align: center;
`;

const Texto = styled.h1`
  font-size: 2.6rem;
  font-weight: 400;
  color: #666;
  letter-spacing: 1px;

  white-space: nowrap;  /* NÃO QUEBRA LINHA */
`;

export default function Titulo({ nome, imagem }) {
  return (
    <Banner imagem={imagem}>
      <Conteudo>
        <Texto>{nome}</Texto>
      </Conteudo>
    </Banner>
  );
}
