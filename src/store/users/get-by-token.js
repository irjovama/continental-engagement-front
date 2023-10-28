import { tryRequest } from "..";

export default async function getUserByToken(token) {
  const options = {
    method: "GET",
    url: "https://engagement-continental.vercel.app/users/find/token",
    params: { token },
  };

  return tryRequest(options);
}
 