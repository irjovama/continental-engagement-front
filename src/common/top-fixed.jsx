import styled from "styled-components";

export const TopFixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: top;
  padding: 1rem;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 400px;
  }
`;
