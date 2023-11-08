import { tryRequest } from "..";

export default async function showUsers() {
  const options = {
    method: "GET",
    url: "https://engagement-continental.vercel.app/users",
    params: { limit: "100000000000", page: "1", results: "1" },
  };

  return tryRequest(options);
}
