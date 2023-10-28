import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import showCategories from "./store/categories/show";
import updateCategory from "./store/categories/update";
import deleteCategory from "./store/categories/delete";
import createCategory from "./store/categories/create";
import questionUpdate from "./store/questions/update";
import deleteQuestion from "./store/questions/delete";
import createQuestion from "./store/questions/create";
import showOptions from "./store/options/show";
import { PrimaryButton } from "./common/buttons";
import setOptions from "./store/options/set";
import { useDrag } from "react-dnd";
import CategoryContainer from "./common/category-container";
import DroppableArea from "./common/dropabble-area";

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
  const [optionsGroups, setOptionsGroups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const handleDrop = async ({ oldIndex, newIndex }) => {
    const newArray = Object.assign([], categories);
    const [movedItem] = newArray.splice(oldIndex, 1);
    newArray.splice(newIndex, 0, movedItem);
    setCategories(newArray);
    setLoading(true);
    for (let index in newArray) {
      await updateCategory(newArray[index].id, { index });
    }
    setLoading(false);
  };
  useEffect(() => {
    showOptions().then((options) => {
      const groupedData = options.data.reduce((result, item) => {
        const group = item.group;

        // Si el grupo ya existe en el resultado, agregamos el elemento a ese grupo
        if (result[group]) {
          result[group].push(item);
        } else {
          // Si no existe, creamos un nuevo grupo con el elemento
          result[group] = [item];
        }

        return result;
      }, {});
      const resultArray = Object.keys(groupedData).map((key) => ({
        name: key,
        options: groupedData[key],
      }));
      setOptionsGroups(resultArray);
    });
    showCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <>
          <PrimaryButton onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? "expandir" : "organizar"}
          </PrimaryButton>
          {categories.map((category, categoryIndex) => {
            return (
              <div key={category.id}>
                {collapsed && (
                  <DroppableArea
                    onDrop={(e) =>
                      handleDrop({
                        oldIndex: e.oldIndex,
                        newIndex: categoryIndex,
                      })
                    }
                  ></DroppableArea>
                )}
                <CategoryContainer
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  oldIndex={categoryIndex}
                  collapsed={collapsed}
                >
                  <div>
                    <Input
                      defaultValue={category.name}
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          e.target.disabled = true;
                          updateCategory(category.id, {
                            name: e.target.value,
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
                          deleteCategory(category.id)
                            .then(() => {
                              const newCategories = Object.assign(
                                [],
                                categories
                              );
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
                    {category.questions.map((question, questionIndex) => {
                      console.log(question)
                      return (
                        <QuestionContainer key={question.id}>
                          <div>
                            <Input
                              defaultValue={question.content}
                              onKeyDown={(e) => {
                                if (e.key == "Enter") {
                                  e.target.disabled = true;

                                  questionUpdate(
                                    category.id,
                                    question.id,
                                    e.target.value
                                  ).then((response) => {
                                    e.target.disabled = false;
                                  });
                                }
                              }}
                            />
                            <button
                              onClick={(e) => {
                                const c = confirm(
                                  "¿Realmente desea borrar la pregunta?" +
                                    question.id
                                );
                                if (c) {
                                  deleteQuestion(category.id, question.id).then(
                                    (response) => {
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
                                    }
                                  );
                                }
                              }}
                            >
                              <FaTrashAlt />
                            </button>
                          </div>
                          <>
                            {optionsGroups.map((o) => {
                              const selected =
                                question.options.length == 0
                                  ? ""
                                  : question.options[0].group;

                              return (
                                <PrimaryButton
                                  key={o.name}
                                  disabled={o.name == selected}
                                  style={
                                    o.name != selected
                                      ? { background: "gray" }
                                      : {}
                                  }
                                  onClick={(e) => {
                                    const newCategories = Object.assign(
                                      [],
                                      categories
                                    );

                                    newCategories[categoryIndex].questions[
                                      questionIndex
                                    ].options = o.options;
                                    setOptions(
                                      category.id,
                                      question.id,
                                      o.name
                                    ).then(() => {
                                      setCategories(newCategories);
                                    });
                                  }}
                                >
                                  {o.name}
                                </PrimaryButton>
                              );
                            })}
                            <PrimaryButton
                              disabled={question.options.length == 0}
                              style={
                                question.options.length != 0
                                  ? { background: "gray" }
                                  : {}
                              }
                              onClick={(e) => {
                                const newCategories = Object.assign(
                                  [],
                                  categories
                                );

                                newCategories[categoryIndex].questions[
                                  questionIndex
                                ].options = [];
                                setOptions(
                                  category.id,
                                  question.id,
                                  o.name
                                ).then(() => {
                                  setCategories(newCategories);
                                });
                              }}
                            >
                              Ninguna
                            </PrimaryButton>
                          </>
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
                              createQuestion(category.id, content).then(
                                (response) => {
                                  const id = response.id;
                                  const newCategories = Object.assign(
                                    [],
                                    categories
                                  );
                                  setCategories(
                                    newCategories.map((c) => {
                                      if (c.id == category.id) {
                                        c.questions.push({
                                          content,
                                          id,
                                          options: [],
                                        });
                                      }
                                      return c;
                                    })
                                  );

                                  e.target.value = "";
                                }
                              );
                            }
                          }}
                        />
                      </div>
                    </QuestionContainer>
                  </ul>
                </CategoryContainer>
              </div>
            );
          })}

          <CategoryContainer>
            <h3>Nueva Categoria</h3>
            <div>
              <Input
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    const name = e.target.value;
                    createCategory(name).then((response) => {
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
      )}
    </>
  );
}
