"use client";
import { useEffect, useState } from "react";
import createResult from "../store/results/create";
import updateResult from "../store/results/update";
import {
  QuestionContainer,
  ButtonContainer,
  CircleButton,
  TextArea,
  TextButton,
  RadioButton,
} from "./questions";

export default function YesNoReactive({ data, index }) {
  const [selected, setSelected] = useState(
    data.results.length > 0 && data.results[0].value
  );

  const [resultId, setResultId] = useState(
    data.results.length > 0 ? data.results[0].id : ""
  );
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);

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

  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <QuestionContainer index={index}>
      <span>{data.content}</span>
      <ButtonContainer>
        {data.options.map((o, i) => {
          return (
            <div key={i}>
              <div>
                <RadioButton
                  disabled={pending}
                  style={
                    selected == o.value
                      ? { background: "#7A00C6", color: "white" }
                      : {}
                  }
                  onClick={(e) => {
                    setSelected(o.value);
                  }}
                ></RadioButton>
              </div>
              <div>{o.label}</div>
            </div>
          );
        })}
      </ButtonContainer>
    </QuestionContainer>
  );
}
