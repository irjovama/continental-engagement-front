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
import Loader from "./common/loader";

function Questions2({ user }) {
  const [categories, setCategories] = useState([]);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [globalSelected, setGlobalSelected] = useState([]);
  const navigate = useNavigate();
  let num = 1;
  useEffect(() => {
    if (progressValue >= 100) {
      updateUser(user.id, { finishedAt: true }).then((s) => {
        navigate("/finish?token=" + user.token);
      });
    }
    showCategoriesByUser(user.token).then((response) => {
      setCategories(
        response.data.filter((c) =>
          ["Preguntas de cierre", "Cultura de Bienestar"].includes(c.name)
        )
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
            <div>
              <Loader />
            </div>
          ) : (
            categories.map((category) => {
              return category.questions
                .filter((q) => {
                  return (
                    category.name != "Cultura de Bienestar" ||
                    q.content.includes("año")
                  );
                })
                .map((question) => {
                  question.index = num;
                  question.categoryId = category.id;
                  question.token = user.token;
                  question.setTotalAnswers = setTotalAnswers;
                  question.totalAnswers = totalAnswers;
                  num++;

                  return (
                    <Reactive
                      data={question}
                      key={question.id}
                      index={num}
                      globalSelected={globalSelected}
                      setGlobalSelected={setGlobalSelected}
                    />
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
            // disabled={totalAnswers < 26}
            onClick={(e) => {
              if (globalSelected.length == 0) {
                alert("Selecciona al menos una opcion");
              } else {
                const otros = globalSelected.find((gs) =>
                  gs.content.includes("otros")
                );
                if (otros) {
                  if (otros?.contestada && otros.contestada) {
                  } else {
                    alert("Especifica que otros");
                    return;
                  }
                }
                if (totalAnswers >= 26) {
                  e.target.disabled = true;
                  navigate("/finish?token=" + user.token);
                }

                const element = document.querySelector(".pending-question");
                if (element) element.scrollIntoView();
              }
            }}
          >
            Finalizar
          </PrimaryButton>
        </div>
      </BottomFixed>
    </>
  );
}

export default Questions2;
