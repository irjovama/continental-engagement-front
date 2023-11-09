import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  font-size: large;
  gap: 1rem;
  @media (max-width: 600px) {
    margin-top: 100px;
    max-width: 400px;
    padding: 1rem;
  }
  
  
`;
