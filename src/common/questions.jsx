"use client";

import styled from "styled-components";

export const QuestionContainer = styled.div`

font-size: 18px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;

  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 1rem;
  padding: 1rem;

  background-color: ${(props) => (props.index % 2 != 0 ? "#fbfaff" : "")};

  @media (max-width: 600px) {
    width: 90vw;
    padding: 1rem;
    font-size: 17px;
  }
`;
export const ButtonContainer = styled.div`



font-size: 16px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: auto auto auto;
    font-size: 17px;
  }
`;
export const CircleButton = styled.button`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  background: #ffffff;
`;

export const RadioButton = styled.button`

  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  background-color: white;
`;

export const SquereButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  background-color: white;

  @media (max-width: 400px) {
    font-size: small;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
`;

export const TextButton = styled.button`
  border-radius: 10px;
  max-width: 200px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: rgba(122, 0, 198, 1);
`;
