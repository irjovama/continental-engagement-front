import { useEffect, useState } from "react";
import showUsers from "./store/users/show";
import { PrimaryButton } from "./common/buttons";
import sendEmailFunc from "./store/mail/sendMail";

export default function MailerPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    showUsers().then((users) => setUsers(users.data));
  }, []);
  async function sendMail(u, e) {
    e.target.disabled = true;
    e.target.innerHTML = "Enviando";

    await sendEmailFunc(u.email, u.token);

    e.target.disabled = false;
    e.target.innerHTML = "Enviar de nuevo";
    e.target.classList.remove("pending");
  }

  async function sleep(ms) {
    return await new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
  }
  async function sendAllMails() {
    const buttons = document.querySelectorAll(".pending");
    for (let button of buttons) {
      const email = button.dataset.email;
      const token = button.dataset.token;
      const user = { email, token };

      await sendMail(user, { target: button });

      await sleep(1000);
    }
  }
  return (
    <>
      <PrimaryButton onClick={() => sendAllMails()}>Enviar Todos</PrimaryButton>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Terminado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users
              .filter((u) => u.id > 1)
              .map((u) => {
                return (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.finishedAt}</td>
                    <td>
                      {u.finishedAt == null && (
                        <PrimaryButton
                          data-token={u.token}
                          data-email={u.email}
                          className={"pending"}
                          onClick={(e) => {
                            e.target.disabled = true;
                            sendMail(u, e);
                          }}
                        >
                          Enviar
                        </PrimaryButton>
                      )}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </>
  );
}
