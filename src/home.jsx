import "./App.css";
import { PrimaryButton } from "./common/buttons";
import { Container } from "./common/container";
import { useEffect, useState } from "react";
import { Content, H1 } from "./common/text";
import { useNavigate } from "react-router-dom";
import updateUser from "./store/users/update";
function Home({ user }) {
  const [token, setToken] = useState("");
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const modalities = [
    {
      name: "presencial",
      label: "Presencial (Asisto todos los días al campus)",
    },
    {
      name: "hibrido",
      label: "Híbrido (Asisto de 2 a 3 veces a la semana al campus)",
    },
    {
      name: "remoto",
      label: "Remoto (Asisto a requerimiento al campus)",
    },
  ];
  useEffect(() => {
    setToken(user?.token && user.token);
  }, [user?.token]);
  return (
    <Container>
      <H1>Encuesta Engagement 2023 -2</H1>
      <Content>
        Hola! Como parte de nuestra apuesta por mejorar, queremos conocer cómo
        estás viviendo tu relación con la organización. Esta encuesta te tomará
        menos de 3 minutos y es <strong>completamente anónima</strong>. Te
        pedimos que por favor la completes con la mayor sinceridad posible. No
        hay respuestas correctas ni incorrectas, tus apreciaciones nos serán muy
        útiles para seguir mejorando. ¡Contamos con tu participación!
        <div>
          Selecciona una modalidad de trabajo
          <ul>
            {modalities.map((m) => {
              return (
                <li key={m.name}>
                  <input
                    id={m.name}
                    type="radio"
                    name="modalidad"
                    value={m.name}
                    onChange={(e) => setSelected(e.target.value)}
                  />
                  <label htmlFor={m.name}>{m.label}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </Content>
      {selected != "" && (
        <PrimaryButton
          onClick={(e) => {
            e.target.disabled = true;
            updateUser(user.id, { modality: selected }).then((response) => {
              navigate("/questions?token=" + token);
            });
          }}
        >
          Comenzar
        </PrimaryButton>
      )}
    </Container>
  );
}

export default Home;
