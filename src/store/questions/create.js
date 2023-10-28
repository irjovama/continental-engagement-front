import { tryRequest } from "..";

export default async function createQuestion(categoryId, value) {
  const options = {
    method: "POST",
    url:
      "https://engagement-continental.vercel.app/categories/" +
      categoryId +
      "/questions",
    headers: {
      "Content-Type": "application/json",
    },
    data: { content: value },
  };

  return tryRequest(options);
}
