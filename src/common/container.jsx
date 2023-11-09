import styled from "styled-components";

export const Container = styled.div`

font-size: 18px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: large;
  gap: 1rem;
  @media (max-width: 600px) {
    margin-top: 100px;
    padding: 1rem;
    width: 100vw;
  }
`;
