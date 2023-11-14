import { useEffect, useState } from "react";
import "./App.css";
import { PrimaryButton, SecondaryButton } from "./common/buttons";
import { Container } from "./common/container";
import Reactive from "./common/reactive";
import { BottomFixed, Pagination, TopFixed } from "./common/top-fixed";
import showCategoriesByUser from "./store/categories/show-by-user";
import { useNavigate } from "react-router-dom";
import updateUser from "./store/users/update";
import ProgressBar from "./common/progressBar";

function Questions2({ user }) {
  const [categories, setCategories] = useState([]);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [globalSelected, setGlobalSelected] = useState();
  const navigate = useNavigate();
  let num = 1;
  useEffect(() => {
    showCategoriesByUser(user.token).then((response) => {
      setCategories(
        response.data.filter((c) => ["Preguntas de cierre"].includes(c.name))
      );
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
      setTotalAnswers(answers.length + 1);
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
        <ProgressBar totalItems={totalQuestions} answers={totalAnswers} />
        <PrimaryButton>Guardar</PrimaryButton>
      </TopFixed>

      <Container>
        <div
          style={{
            marginTop: "200px",
            maxWidth: "800px",
            marginBottom: "200px",
          }}
        >
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

      <BottomFixed>
        <div>
          <SecondaryButton
            onClick={(e) => {
              e.target.disabled = true;

              navigate("/questions/1?token=" + user.token);
            }}
          >
            Regresar
          </SecondaryButton>
        </div>
        <div>
          <Pagination page={3} />
        </div>
        <div>
          <PrimaryButton
            disabled={totalAnswers < 25}
            onClick={(e) => {
              e.target.disabled = true;

              navigate("/questions/2?token=" + user.token);
            }}
          >
            Continuar
          </PrimaryButton>
        </div>
      </BottomFixed>
    </>
  );
}

export default Questions2;
