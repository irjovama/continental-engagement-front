import { tryRequest } from "..";

export default async function deleteCategory(categoryId) {
  const options = {
    method: "DELETE",
    url: "https://engagement-continental.vercel.app/categories/" + categoryId,
    headers: { "Content-Type": "application/json" },
  };

  return tryRequest(options);
}
