import { useEffect, useState } from "react";
import { insomniaRequest } from "../store";
import styled from "styled-components";
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
export default function ScaleReactive({ data }) {
  const [scale, setScale] = useState([]);
  const [selected, setSelected] = useState(
    data.results.length > 0 && data.results[0].value
  );
  const [resultId, setResultId] = useState(
    data.results.length > 0 ? data.results[0].id : ""
  );
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const newScale = [];
    for (let i = data.minRange; i <= data.maxRange; i++) {
      newScale.push(i);
    }
    setScale(newScale);
    setReady(true);
  }, []);

  useEffect(() => {
    if (selected && ready) {
      setPending(true);
      const resourceName = resultId != "" ? "resultsUpdate" : "resultsCreate";
      const customBody =
        resultId != ""
          ? { value: selected }
          : { token: data.token, value: selected };
      insomniaRequest({
        resourceName,
        customParameters: {
          categoryId: data.categoryId,
          questionId: data.id,
          resultId,
        },
        customBody,
      })
        .then((response) => {
          setPending(false);
          if (!resultId) {
            setResultId(response.id);
            data.setTotalAnswers(data.totalAnswers + 1);
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [selected]);
  return (
    <QuestionContainer>
      <span>
        {data.index} - {data.content}
      </span>
      <ButtonContainer>
        {scale.map((s) => {
          return (
            <CircleButton
              disabled={pending}
              key={s}
              style={
                selected == s ? { background: "#7A00C6", color: "white" } : {}
              }
              onClick={(e) => setSelected(s)}
            >
              {s}
            </CircleButton>
          );
        })}
      </ButtonContainer>
    </QuestionContainer>
  );
}
