import { tryRequest } from "..";

export default async function updateResult(
  categoryId,
  questionId,
  resultId,
  value
) {
  const options = {
    method: "PATCH",
    url:
      "https://engagement-continental.vercel.app/categories/" +
      categoryId +
      "/questions/" +
      questionId +
      "/results/" +
      resultId,

    headers: {
      "Content-Type": "application/json",
    },
    data: { value },
  };

  return tryRequest(options);
}
