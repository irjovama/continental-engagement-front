import styled from "styled-components";

export const TopFixed = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: top;
  padding-right: 3rem;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100vw;
  }
`;
