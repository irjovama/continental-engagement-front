import { tryRequest } from "..";

export default async function updateCategory(categoryId, data) {
  const options = {
    method: "PATCH",
    url: "https://engagement-continental.vercel.app/categories/" + categoryId,
    headers: { "Content-Type": "application/json" },
    data,
  };

  return tryRequest(options);
}
