import { tryRequest } from "..";

export default async function questionUpdate(categoryId, questionId, value) {
  const options = {
    method: "PATCH",
    url:
      "https://engagement-continental.vercel.app/categories/" +
      categoryId +
      "/questions/" +
      questionId,
    headers: {
      "Content-Type": "application/json",
    },
    data: { content: value },
  };

  tryRequest(options);
}
