import { useEffect, useState } from "react";
import "./App.css";
import { PrimaryButton } from "./common/buttons";
import { Container } from "./common/container";
import { insomniaRequest } from "./store";
import Reactive from "./common/reactive";
import { TopFixed } from "./common/top-fixed";

function Questions({ user }) {
  const [categories, setCategories] = useState([]);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  let num = 1;
  useEffect(() => {
    insomniaRequest({
      resourceName: "categoriesShowByUser",
      customQuery: { token: user.token },
    }).then((response) => {
      setCategories(response.data);
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

  return (
    <>
      <TopFixed>
        <div id="top">
          <div>
            <progress
              id="file"
              max="100"
              value={
                totalAnswers &&
                totalQuestions &&
                (totalAnswers / totalQuestions) * 100
              }
            />
          </div>
          <PrimaryButton
            disabled={(totalAnswers / totalQuestions) * 100 < 100}
            onClick={() => {
              console.log("Terminado");
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
          {categories.map((category) => {
            return category.questions.map((question) => {
              question.index = num;
              question.categoryId = category.id;
              question.token = user.token;
              question.setTotalAnswers = setTotalAnswers;
              question.totalAnswers = totalAnswers;
              num++;
              return <Reactive data={question} key={question.id} />;
            });
          })}
        </div>
      </Container>
    </>
  );
}

export default Questions;
