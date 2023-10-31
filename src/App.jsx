"use client";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./home";
import Questions from "./questions";
import Questions2 from "./questions2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Container } from "./common/container";
import AdministrationPanel from "./admin-panel";
import getUserByToken from "./store/users/get-by-token";
import FinishPage from "./finish";

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
      getUserByToken(token)
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
      ) : user && user?.finishedAt ? (
        <FinishPage user={user} />
      ) : user ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path={"questions"} element={<Questions user={user} />} />
            <Route path={"questions2"} element={<Questions2 user={user} />} />
            <Route path={"finish"} element={<FinishPage user={user} />} />
            <Route
              path={"administration-panel"}
              element={<AdministrationPanel user={user} />}
            />
          </Routes>
        </Router>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
