"use client";
import { useEffect, useState } from "react";
import "./App.css";
import Questions from "./questions";
import Questions2 from "./questions2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "./common/container";
import AdministrationPanel from "./admin-panel";
import getUserByToken from "./store/users/get-by-token";
import FinishPage from "./finish";
import ReciboPage from "./recibo";
import HomePage from "./home";
import Questions0 from "./questions0";
import ExportPage from "./reports/export";
import MailerPage from "./mail-panel";

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
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="questions/0" element={<Questions0 user={user} />} />
            <Route path={"questions/1"} element={<Questions user={user} />} />
            <Route path={"questions/2"} element={<Questions2 user={user} />} />
            <Route path={"finish"} element={<FinishPage user={user} />} />
            <Route path={"recibo"} element={<ReciboPage user={user} />} />
            <Route path={"export"} element={<ExportPage user={user} />} />
            <Route path={"mailer"} element={<MailerPage user={user} />} />
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
