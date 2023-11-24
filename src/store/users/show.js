import { tryRequest } from "..";

export default async function showUsers({ page = 1, limit = 10000000000000 }) {
  const options = {
    method: "GET",
    url: "https://engagement-continental.vercel.app/users",
    params: { limit, page, results: "1" },
  };

  return tryRequest(options);
}
