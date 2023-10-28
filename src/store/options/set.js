import { tryRequest } from "..";

export default async function setOptions(categoryId, questionId, group) {
  const options = {
    method: "PUT",
    url:
      "https://engagement-continental.vercel.app/categories/" +
      categoryId +
      "/questions/" +
      questionId +
      "/options/" +
      group,
  };
  return await tryRequest(options);
}
