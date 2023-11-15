"use client";
import Logo1 from "./assets/logo1.svg";
import Arrows from "./assets/arrows.svg";
import styled from "styled-components";
import { PrimaryButton } from "./common/buttons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const TopArrows = styled.img`
  position: relative;
  top: -50px;
  left: 0px;
`;

const BottomArrows = styled.img`
  position: relative;
  bottom: -70vh;
  right: -100px;
`;

const ArrowContainer = styled.div`
  display: absolute;
  top: 0xp;
  left: 0px;
  width: 100vw;
  height: 90vh;
  z-index: 1;
`;
const Container = styled.div`
  /* font-family: "Neue Plak"; */

  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100vw;
  gap: 2rem;
  color: #7a00c6;
  z-index: 2;
  @media (max-width: 600px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;
const Title = styled.div`
  /* font-family: "Neue Plak"; */
  font-size: 32px;
  font-weight: 900;
  line-height: 33.6px;
  letter-spacing: 0em;
  text-align: center;
  color: #7a00c6;
  & div {
    font-size: 22px;
    font-weight: 600;
    line-height: 28.8px;
  }
`;
const LeftPanel = styled.div`
  display: flex;
`;
const RightPanel = styled.div`
  width: 30vw;
  display: flex;
  align-items: start;
  flex-direction: column;
  font-weight: 400px;
  @media (max-width: 600px) {
    width: 70vw;
  }
`;
const FootContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  display: flex;
  justify-content: center;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;
export default function HomePage({ user }) {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(user?.token && user.token);
  }, [user?.token]);
  return (
    <div>
      <ArrowContainer>
        <TopArrows src={Arrows} /> <BottomArrows src={Arrows} />
      </ArrowContainer>
      <div style={{position: "absolute", top: "0px"}}>
        <LogoContainer>
          <img src={Logo1} />
        </LogoContainer>
        <Container>
          <LeftPanel>
            <Title>
              <div>Engagement y</div>
              <span>Clima</span>
              <div>
                <img src={Arrows} width={"50px"} />
              </div>
            </Title>
          </LeftPanel>
          <RightPanel>
            <Title>¡Hola!</Title>
            <p>
              Como parte de nuestra apuesta por mejorar, queremos conocer cómo
              estás viviendo tu relación con la organización. Esta encuesta te
              tomará <strong>menos de 5 minutos</strong> y es completamente
              anónima.
            </p>

            <p>
              Te pedimos que por favor la completes con la mayor sinceridad
              posible. No hay respuestas correctas ni incorrectas, tus
              apreciaciones nos serán muy útiles para seguir mejorando.
            </p>

            <p>
              <strong>¡Contamos con tu participación!</strong>
            </p>
            <Link to={"/questions/0?token=" + token}>
              <PrimaryButton>Empezar</PrimaryButton>
            </Link>
          </RightPanel>
        </Container>
        <FootContainer>
          Realizado por Bienestar y Talento - Universidad Continental 2023
        </FootContainer>
      </div>
    </div>
  );
}
