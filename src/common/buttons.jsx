import styled from "styled-components";

export const PrimaryButton = styled.button`
  background: #7a00c6;
  color: white;
  border: none;
  padding: 10px 34px;
  border-radius: 34px;
  max-height: 40px;
  gap: 4px;
  box-shadow: 0px 4px 4px 0px #00000040;
  &:active {
    background: white;
    color: #7a00c6;
  }
`;

export const SecondaryButton = styled.button`
  color: #7a00c6;
  background: white;
  border: none;
  padding: 10px 34px;
  border-radius: 34px;
  max-height: 40px;
  gap: 4px;
  box-shadow: 0px 4px 4px 0px #00000040;
  &:active {
    color: white;
    background: #7a00c6;
  }
`;
