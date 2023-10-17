import styled from "styled-components";

export const TopFixed = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  #top {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-evenly;
    #file {
      block-size: 3em;
    }
  }
`;
