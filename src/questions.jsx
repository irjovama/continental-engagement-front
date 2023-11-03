import { useEffect, useState } from "react";
import "./App.css";
import { PrimaryButton } from "./common/buttons";
import { Container } from "./common/container";
import Reactive from "./common/reactive";
import { TopFixed } from "./common/top-fixed";
import showCategoriesByUser from "./store/categories/show-by-user";
import { useNavigate } from "react-router-dom";
import updateUser from "./store/users/update";

function Questions({ user }) {
  const [categories, setCategories] = useState([]);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const navigate = useNavigate();
  let num = 1;
  useEffect(() => {
    showCategoriesByUser(user.token).then((response) => {
      setCategories(
        response.data.filter(
          (c) => !["home", "Preguntas de cierre"].includes(c.name)
        )
      );
      const questions = response.data
        .map((category) => category.questions)
        .reduce((accumulator, currentArray) => {
          return accumulator.concat(currentArray);
        }, []);
      setTotalQuestions(questions.length);
      const answers = questions.filter((q) => q.results.length > 0);
      setTotalAnswers(answers.length);
    });
  }, []);
  const progressValue =
    totalAnswers && totalQuestions && (totalAnswers / totalQuestions) * 100;

  if (progressValue >= 100) {
    updateUser(user.id, { finishedAt: true }).then((s) => {
      navigate("/finish?token=" + user.token);
    });
  }
  return (
    <>
      <TopFixed>
        <div id="top">
          <div>
            <progress id="file" max="100" value={progressValue} />
          </div>
          <PrimaryButton
            disabled={progressValue < 70}
            onClick={() => {
              navigate("/questions2?token=" + user.token);
            }}
          >
            Continuar
          </PrimaryButton>
        </div>
        <div>
          En una escala del 1 al 7, donde 1 es totalmente en desacuerdo y 7 es
          totalmente de acuerdo, marque las siguientes afirmaciones
        </div>
      </TopFixed>
      <Container>
        <div style={{ marginTop: "100px" }}>
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
                return <Reactive data={question} key={question.id} />;
              });
            })
          )}
        </div>
      </Container>
    </>
  );
}

export default Questions;
