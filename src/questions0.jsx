import "./App.css";
import { PrimaryButton } from "./common/buttons";
import { Container } from "./common/container";
import { useEffect, useState } from "react";
import { Content, H1 } from "./common/text";
import { useNavigate } from "react-router-dom";
import updateUser from "./store/users/update";
import Reactive from "./common/reactive";
import showCategoriesByUser from "./store/categories/show-by-user";
import { BottomFixed, Pagination, TopFixed } from "./common/top-fixed";
import styled from "styled-components";
import RadioReactive from "./common/radioReactive";
import ProgressBar from "./common/progressBar";

function Questions0({ user }) {
  const [categories, setCategories] = useState([]);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [token, setToken] = useState("");
  const [modalityAnswer, setModalityAnswer] = useState(false);
  const navigate = useNavigate();
  let num = 1;

  useEffect(() => {
    showCategoriesByUser(user.token).then((response) => {
      setCategories(response.data.filter((c) => c.name == "home"));
      const questions = response.data
        .map((category) => category.questions)
        .reduce((accumulator, currentArray) => {
          return accumulator.concat(currentArray);
        }, []);
      setTotalQuestions(questions.length - 5);
      const answers = questions.filter((q) => {
        const multiple =
          q?.options.length > 0 &&
          q.options[0].group.split("-")[0] == "multiple";
        return !multiple && q.results.length > 0;
      });
      const newModalityAnswer = user.modality != "" ? 1 : 0;
      setModalityAnswer(newModalityAnswer);
      setTotalAnswers(answers.length + newModalityAnswer);
    });
  }, []);
  const modalities = [
    {
      id: 1,
      name: "presencial",
      label: "Presencial (Asisto todos los días al campus)",
      value: "presencial",
    },
    {
      id: 2,
      name: "hibrido",
      label: "Híbrido (Asisto de 2 a 3 veces a la semana al campus)",
      value: "hibrido",
    },
    {
      id: 3,
      name: "remoto",
      label: "Remoto (Asisto a requerimiento al campus)",
      value: "remoto",
    },
  ];
  useEffect(() => {
    setToken(user?.token && user.token);
  }, [user?.token]);
  const progressValue =
    totalAnswers && totalQuestions && (totalAnswers / totalQuestions) * 100;

  if (progressValue >= 100) {
    updateUser(user.id, { finishedAt: true }).then((s) => {
      navigate("/finish?token=" + user.token);
    });
  }
  return (
    <Container>
      <TopFixed>
        <ProgressBar
          totalItems={totalQuestions}
          answers={totalAnswers}
          button={
            <PrimaryButton>Guardar</PrimaryButton>
          }
        />
      </TopFixed>
      <Content>
        <div style={{ marginTop: "100px", marginBottom: "200px" }}>
          <Container>
            {user?.id && (
              <RadioReactive
                setTotalAnswers={setTotalAnswers}
                totalAnswers={totalAnswers}
                modalityAnswer={modalityAnswer}
                user={user}
                data={{
                  content: "¿Cuál es tu modalidad de trabajo?",
                  options: modalities,
                }}
              />
            )}

            <div>
              {categories.length == 0 ? (
                <div>Loading...</div>
              ) : (
                categories.map((category) => {
                  return category.questions.map((question) => {
                    question.index = num;
                    question.categoryId = category.id;
                    question.token = user.token;
                    question.setTotalAnswers = setTotalAnswers;
                    question.totalAnswers = totalAnswers;
                    num++;
                    return (
                      <Reactive data={question} key={question.id} index={num} />
                    );
                  });
                })
              )}
            </div>
          </Container>
        </div>
      </Content>
      <BottomFixed>
        <div>{""}</div>
        <div>
          <Pagination page={1} />
        </div>
        <div>
          <PrimaryButton
           disabled={totalAnswers < 3}
            onClick={(e) => {
              e.target.disabled = true;

              navigate("/questions/1?token=" + token);
            }}
          >
            Continuar
          </PrimaryButton>
        </div>
      </BottomFixed>
    </Container>
  );
}

export default Questions0;
