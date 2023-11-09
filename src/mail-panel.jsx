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

    sendEmailFunc(u.email, u.token).then((mail) => {

      e.target.disabled = false;
      e.target.innerHTML = "Enviar de nuevo";
    });
  }
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Terminado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 &&
          users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.finishedAt}</td>
                <td>
                  {u.finishedAt == null && (
                    <PrimaryButton
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
  );
}
