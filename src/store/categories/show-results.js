import { tryRequest } from "..";

export default async function showCategoriesResults() {
  const options = {
    method: "GET",
    url: "https://engagement-continental.vercel.app/categories",
    params: { limit: "100000000000", page: "1", results: "1" },
  };

  return tryRequest(options);
}
