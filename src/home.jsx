import { Link } from "react-router-dom";
import "./App.css";
import { PrimaryButton } from "./common/buttons";
import { Container } from "./common/container";
import { useEffect, useState } from "react";
import { Content, H1 } from "./common/text";
import { insomniaRequest } from "./store";

function Home({ user }) {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(user?.token && user.token);
    
  }, [user?.token]);
  return (
    <Container>
      <H1>Encuesta Engagement 2023 -2</H1>
      <Content>
        Hola! Como parte de nuestra apuesta por mejorar, queremos conocer cómo
        estás viviendo tu relación con la organización. Esta encuesta te tomará
        menos de 3 minutos y es completamente anónima. Te pedimos que por favor
        la completes con la mayor sinceridad posible. No hay respuestas
        correctas ni incorrectas, tus apreciaciones nos serán muy útiles para
        seguir mejorando. ¡Contamos con tu participación!
      </Content>
      <Link to={"/questions?token=" + token}>
        <PrimaryButton>Comenzar</PrimaryButton>
      </Link>
    </Container>
  );
}

export default Home;
