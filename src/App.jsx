import { useEffect, useState } from "react";
import "./App.css";
import Home from "./home";
import Questions from "./questions";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {  insomniaRequest } from "./store";
import { Container } from "./common/container";
import AdministrationPanel from "./admin-panel";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.href.split("?")[1]);
    const newToken = params.get("token");
    setToken(newToken);
  }, []);

  useEffect(() => {
    if (token != "") {
      insomniaRequest({
        resourceName: "usersFindByToken",
        customQuery: { token },
      })
        .then((u) => {
          setUser(u);
        })
        .catch((err) => {
          console.log(err);
          setError("El link es incorrecto por favor revisalo");
        });
    }
  }, [token]);
  return (
    <>
      {error ? (
        <Container>{error}</Container>
      ) : user ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path={"questions"} element={<Questions user={user} />} />
            <Route path={"administration-panel"} element={<AdministrationPanel user={user} />} />
          </Routes>
        </Router>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
