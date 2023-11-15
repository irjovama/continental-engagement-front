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
  SquereButton,
} from "./questions";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem;

  @media (max-width: 600px) {
    /* display: flex;
    flex-direction: column;
    max-width: 400px;
    justify-content: center;
    align-items: center; */
  }
`;

const StyledInput = styled.input`
  border-radius: 21px;
  border: 1px solid #d9d9d9;
`;
export default function MultipleReactive({ data, index }) {
  return (
    <Container>
      <CheckButton data={data} />
    </Container>
  );
}

function CheckButton({ data }) {
  const [pending, setPending] = useState(false);
  const [selected, setSelected] = useState(data?.results[0]?.value || "off");
  const [resultId, setResultId] = useState(data?.results[0]?.id || false);
  const [ready, setReady] = useState(false);
  const label = data.content.split("-")[1];
  function toggleSelected() {
    setSelected(selected == "on" ? "off" : "on");
  }
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
          }
        );
      }
    }
  }, [selected]);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <div
      className={selected != "" ? "" : "pending-question"}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: "10px",
      }}
    >
      <RadioButton
        disabled={pending}
        style={
          selected && selected != "off"
            ? { background: "#7A00C6", color: "white" }
            : {}
        }
        onClick={(e) => {
          toggleSelected();
        }}
      ></RadioButton>

      <div style={{ fontSize: "15px" }}>{label}</div>

      {label.toLowerCase().includes("otro") && (
        <StyledInput
          disabled={selected == "off"}
          placeholder="Especifica"
          defaultValue={selected.split("-")[1]}
          onBlur={(e) => {
            if (e.target.value == "") {
              alert("Especifica cual es el otro motivo");
              e.target.focus();
            } else {
              setSelected("on-" + e.target.value);
            }
          }}
        />
      )}
    </div>
  );
}
