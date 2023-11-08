"use client";
import styled from "styled-components";
import { PrimaryButton } from "./common/buttons";

export default function FinishPage() {
  return (
    <Container>
      <Title>¡Gracias por haber realizado la encuesta de engagement!</Title>
      <SubTitle>
        Pueden cerrar la ventana o hacer click en el botón salir.
      </SubTitle>
      <PrimaryButton onClick={(e) => window.close()}>Salir</PrimaryButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  gap: 1rem;
`;

const Title = styled.div`
  color: #6802c1;
  font-family: Neue Plak;
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  letter-spacing: 0em;
  text-align: center;
  width: 600px;
`;

const SubTitle = styled.div`
  color: #6802c1;
  font-family: Neue Plak;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
`;
