"use client";
import styled from "styled-components";
import Back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const BackgroundBar = styled.div`
  background: #dcd4ff;
  height: 10px;
  width: 100%;
  border-radius: 30px;
`;

const FrontBar = styled.div`
  background: #6802c1;
  height: 10px;
  width: ${(props) => props.width};
  margin-top: -10px;
  border-radius: 30px;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;

  @media (max-width: 600px) {
 
  }
`;

const Container2 = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Arrow = styled.div`
  cursor: pointer;
  position: absolute;
  left: 0px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: 2rem;

  @media (max-width: 600px) {
    position: relative;
  }
`;
const DivLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #6802c1;
  margin: 1rem;
  & span {
    font-weight: 600;
  }
`;
export default function ProgressBar({ totalItems, answers, text, button }) {
  const value = (answers / totalItems) * 100;
  const [token, setToken] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.href.split("?")[1]);
    const newToken = params.get("token");
    setToken(newToken);
  }, []);
  return (
    <>
      <Arrow
        onClick={(e) => {
          navigate("/?token=" + token);
        }}
      >
        <img src={Back} />
        Salir
      </Arrow>
      <Container>
        <Container2>
          <BarContainer>
            <DivLine>
              {value <= 20 && <span>Vamos empezando</span>}
              {value > 20 && value <= 45 && <span>¡Seguimos!</span>}
              {value > 45 && value <= 70 && (
                <span>¡Ya estamos por la mitad!</span>
              )}
              {value > 70 && value <= 90 && <span>¡Un poco más!</span>}
              {value > 90 && <span>¡Ya falta poco!</span>}
              <div>
                {answers}/{totalItems}
              </div>
            </DivLine>
            <BackgroundBar />
            <FrontBar width={value + "%"} />
          </BarContainer>
          {button}
        </Container2>

        <div>{text}</div>
      </Container>
    </>
  );
}
