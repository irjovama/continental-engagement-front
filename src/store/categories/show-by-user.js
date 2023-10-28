import { tryRequest } from "..";

export default async  function showCategoriesByUser(token) {
    const options = {
      method: "GET",
      url: "https://engagement-continental.vercel.app/categories",
      params: { token, limit: 10000, page: 1 },
    };
    return tryRequest(options);
  }