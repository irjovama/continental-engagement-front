"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import createResult from "../store/results/create";
import updateResult from "../store/results/update";
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;
const CircleButton = styled.button`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: rgba(122, 0, 198, 1);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
`;

const TextButton = styled.button`
  border-radius: 10px;
  max-width: 200px;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-color: rgba(122, 0, 198, 1);
`;
export default function ScaleReactive({ data }) {
  const [selected, setSelected] = useState(
    data.results.length > 0 && data.results[0].value
  );
  const [resultId, setResultId] = useState(
    data.results.length > 0 ? data.results[0].id : ""
  );
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (selected && ready) {
      setPending(true);
      if (resultId != "") {
        updateResult(data.categoryId, data.id, resultId, selected).then(
          (response) => {
            setPending(false);
          }
        );
      } else {
        createResult(data.categoryId, data.id, data.token, selected).then(
          (response) => {
            setPending(false);
            setResultId(response.id);
            data.setTotalAnswers(data.totalAnswers + 1);
          }
        );
      }
    }
  }, [selected]);
  return (
    <QuestionContainer>
      <span>
        {data.index} - {data.content}
      </span>
      <ButtonContainer>
        {data.options.length == 0 ? (
          <TextArea
            defaultValue={selected ? selected : ""}
            disabled={pending}
            onBlur={(e) => setSelected(e.target.value)}
          ></TextArea>
        ) : (
          data.options.map((o) => {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(o.value)) ? (
              <CircleButton
                disabled={pending}
                key={o.id}
                style={
                  selected == o.value
                    ? { background: "#7A00C6", color: "white" }
                    : {}
                }
                onClick={(e) => setSelected(o.value)}
              >
                {o.label}
              </CircleButton>
            ) : (
              <TextButton
                disabled={pending}
                key={o.id}
                style={
                  selected == o.value
                    ? { background: "#7A00C6", color: "white" }
                    : {}
                }
                onClick={(e) => setSelected(o.value)}
              >
                {o.label}
              </TextButton>
            );
          })
        )}
      </ButtonContainer>
    </QuestionContainer>
  );
}
