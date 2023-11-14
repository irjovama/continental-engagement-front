import styled from "styled-components";
import { RadioButton } from "./questions";

export const TopFixed = styled.div`
  position: fixed;
  top: 0;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 1rem;
  width: 100%;
  padding: 1rem;

  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BottomFixed = styled.div`
  position: fixed;
  bottom: 0;

  background-color: white;
  display: grid;
  grid-template-columns: 100px 100px 100px;
  justify-content: space-evenly;
  align-items: top;
  gap: 1rem;
  width: 100%;

  padding-top: 3rem;
  padding-bottom: 3rem;
  @media (max-width: 600px) {
    flex-direction: column;
    grid-template-columns: 60% 20% 30%;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export function Pagination({ page }) {
  return (
    <PageContainer>
      <RadioButton style={page >= 1 ? { background: "#7A00C6" } : {}} />
      <RadioButton style={page >= 2 ? { background: "#7A00C6" } : {}} />
      <RadioButton style={page == 3 ? { background: "#7A00C6" } : {}} />
    </PageContainer>
  );
}
