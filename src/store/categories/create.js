import { tryRequest } from "..";

export default async function createCategory(name) {
  const options = {
    method: "POST",
    url: "https://engagement-continental.vercel.app/categories",
    headers: { "Content-Type": "application/json" },
    data: { name },
  };

  return tryRequest(options);
}
