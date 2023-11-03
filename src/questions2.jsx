import { useEffect, useState } from "react";
import "./App.css";
import { PrimaryButton } from "./common/buttons";
import { Container } from "./common/container";
import Reactive from "./common/reactive";
import { TopFixed } from "./common/top-fixed";
import showCategoriesByUser from "./store/categories/show-by-user";
import { useNavigate } from "react-router-dom";
import updateUser from "./store/users/update";

function Questions2({ user }) {
  const [categories, setCategories] = useState([]);
  const [totalAnswers, setTotalAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
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
      setTotalQuestions(questions.length - 1);
      const answers = questions.filter((q) => q.results.length > 0);
      setTotalAnswers(answers.length);
    });
  }, []);
  const progressValue =
    totalAnswers && totalQuestions && (totalAnswers / totalQuestions) * 100;

  if (progressValue >= 100) {
    updateUser(user.id, { finishedAt: true }).then((s) => {
      
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
            disabled={progressValue < 100}
            onClick={() => {
              navigate("/finish?token=" + user.token);
            }}
          >
            Terminar
          </PrimaryButton>
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

export default Questions2;
