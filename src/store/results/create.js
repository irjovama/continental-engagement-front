import { tryRequest } from "..";

export default async function createResult(
  categoryId,
  questionId,
  token,
  value
) {
  const options = {
    method: "POST",
    url:
      "https://engagement-continental.vercel.app/categories/" +
      categoryId +
      "/questions/" +
      questionId +
      "/results",
    headers: {
      "Content-Type": "application/json",
    },
    data: { value, token },
  };

  return tryRequest(options);
}
