import { tryRequest } from "..";

export default async function sendEmailFunc(email, token) {
  const options = {
    method: "POST",
    url: "https://engagement-continental.vercel.app/mails",
    headers: { "Content-Type": "application/json" },
    data: { email, token },
  };

  return tryRequest(options);
}
