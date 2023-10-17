import { useEffect, useState } from "react";
import { insomniaRequest } from "./store";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
const CategoryContainer = styled.div`
  background: lightblue;
  padding: 1rem;
  margin: 1rem;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  div {
    display: grid;
    grid-template-columns: 5fr 1fr; /* Tamaño de las columnas */
    gap: 2rem; /* Espacio entre las celdas */
  }
`;

const QuestionContainer = styled.li`
  list-style: none;
  background: lightgray;
  padding: 1rem;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  div {
    display: grid;
    grid-template-columns: 5fr 1fr; /* Tamaño de las columnas */
    gap: 2rem; /* Espacio entre las celdas */
  }
`;

const Input = styled.input`
  width: auto;
  border: none;
  padding: 0.5rem;
  font-weight: 800;
`;
export default function AdministrationPanel({ user }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    insomniaRequest({ resourceName: "categoriesShow" }).then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <>
      {categories.map((category) => {
        return (
          <CategoryContainer key={category.id}>
            <div>
              <Input
                defaultValue={category.name}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    e.target.disabled = true;
                    insomniaRequest({
                      resourceName: "categoriesUpdate",
                      customBody: { name: e.target.value },
                      customParameters: { categoryId: category.id },
                    }).then((response) => {
                      e.target.disabled = false;
                    });
                  }
                }}
              />
              <button
                onClick={() => {
                  const c = confirm(
                    "¿Realmente desea borrar la categoría? Se perderan todas las preguntas contenidas"
                  );
                  if (c) {
                    insomniaRequest({
                      resourceName: "categoriesDelete",
                      customParameters: { categoryId: category.id },
                    })
                      .then(() => {
                        const newCategories = Object.assign([], categories);
                        setCategories(
                          newCategories.filter((c) => c.id != category.id)
                        );
                      })
                      .catch((err) => {
                        console.log(err.message);
                      });
                  }
                }}
              >
                <FaTrashAlt />
              </button>
            </div>
            <ul>
              {category.questions.map((question) => {
                return (
                  <QuestionContainer key={question.id}>
                    <div>
                      <Input
                        defaultValue={question.content}
                        onKeyDown={(e) => {
                          if (e.key == "Enter") {
                            e.target.disabled = true;
                            insomniaRequest({
                              resourceName: "questionsUpdate",
                              customBody: { content: e.target.value },
                              customParameters: {
                                categoryId: category.id,
                                questionId: question.id,
                              },
                            }).then((response) => {
                              e.target.disabled = false;
                            });
                          }
                        }}
                      />
                      <button
                        onClick={(e) => {
                          const c = confirm(
                            "¿Realmente desea borrar la pregunta?" + question.id
                          );
                          if (c) {
                            insomniaRequest({
                              resourceName: "questionsDelete",
                              customParameters: {
                                categoryId: category.id,
                                questionId: question.id,
                              },
                            }).then((response) => {
                              const newCategories = Object.assign(
                                [],
                                categories
                              );
                              setCategories(
                                newCategories.map((c) => {
                                  if (c.id == category.id) {
                                    c.questions = c.questions.filter(
                                      (q) => q.id != question.id
                                    );
                                  }
                                  return c;
                                })
                              );
                            });
                          }
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </QuestionContainer>
                );
              })}
              <QuestionContainer>
                <span>Nueva Pregunta</span>
                <div>
                  <Input
                    onKeyDown={(e) => {
                      if (e.key == "Enter") {
                        const content = e.target.value;
                        insomniaRequest({
                          resourceName: "questionsCreate",
                          customBody: { content },
                          customParameters: { categoryId: category.id },
                        }).then((response) => {
                          const id = response.id;
                          const newCategories = Object.assign([], categories);
                          setCategories(
                            newCategories.map((c) => {
                              if (c.id == category.id) {
                                c.questions.push({ content, id });
                              }
                              return c;
                            })
                          );

                          e.target.value = "";
                        });
                      }
                    }}
                  />
                </div>
              </QuestionContainer>
            </ul>
          </CategoryContainer>
        );
      })}
      <CategoryContainer>
        <h3>Nueva Categoria</h3>
        <div>
          <Input
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                const name = e.target.value;
                insomniaRequest({
                  resourceName: "categoriesCreate",
                  customBody: { name },
                }).then((response) => {
                  const id = response.id;
                  const newCategories = Object.assign([], categories);
                  newCategories.push({ name, id, questions: [] });
                  console.log(newCategories);
                  setCategories(newCategories);
                  e.target.value = "";
                });
              }
            }}
          />
        </div>
      </CategoryContainer>
    </>
  );
}
