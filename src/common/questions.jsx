"use client";

import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  gap: 1rem;
  padding: 1rem;
  max-width: 800px;
  background-color: ${(props) => (props.index % 2 != 0 ? "#fbfaff" : "")};
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
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
