import { tryRequest } from "..";

export default async function updateUser(userId, data) {
  const options = {
    method: "PATCH",
    url: "https://engagement-continental.vercel.app/users/" + userId,
    headers: { "Content-Type": "application/json" },
    data,
  };
  return tryRequest(options);
}
