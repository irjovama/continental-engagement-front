import { tryRequest } from "..";

export default async function deleteQuestion (categoryId, questionId) {
  const options = {
    method: "DELETE",
    url:
      "https://engagement-continental.vercel.app/categories/" +
      categoryId +
      "/questions/" +
      questionId,
  };

  tryRequest(options);
}
