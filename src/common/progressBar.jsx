"use client";
import styled from "styled-components";

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
  width: 80vw;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Container2 = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DivLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Neue Plak;
  font-size: 18px;

  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #6802c1;

  & span {
    font-weight: 600;
  }
`;
export default function ProgressBar({ totalItems, answers, text, button }) {
  const value = (answers / totalItems) * 100;

  return (
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
  );
}
