"use client";
import { useEffect, useState } from "react";
import createResult from "../store/results/create";
import updateResult from "../store/results/update";
import { QuestionContainer, ButtonContainer, RadioButton } from "./questions";
import ScaleReactive from "./scaleReactive";
import updateUser from "../store/users/update";

export default function RadioReactive({
  user,
  data,
  totalAnswers,
  setTotalAnswers,
  modalityAnswer,
}) {
  const defaultValue = user?.modality && user.modality;
  const [pending, setPending] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    if (selected != defaultValue) {
      setPending(true);
      updateUser(user.id, { modality: selected })
        .then((response) => {
          if (modalityAnswer == 0) {
            setTotalAnswers(totalAnswers + 1);
          }
        })
        .finally((response) => {
          setPending(false);
        });
    }
  }, [selected]);

  return (
    <QuestionContainer>
      <>{data.content}</>
      <ButtonContainer>
        {data.options.map((o) => {
          return (
            <div
              key={o.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
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