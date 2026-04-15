import styled from "styled-components";

// Modelo principal (Container externo)
const ModeloCampo = styled.div`
  background: white;
  padding: 32px;
  margin: 32px 0;
`;

// Modelo para organizar os itens internos (Flexbox moderno)
const CampoInterno = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

// Componente Funcional Campo que recebe os filhos (children) para renderizar dentro do modelo
export function Campo({ children }) {
  return (
    <ModeloCampo>
      <CampoInterno>
        {children}
      </CampoInterno>
    </ModeloCampo>
  );
}