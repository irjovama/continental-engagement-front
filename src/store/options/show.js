import { tryRequest } from "..";

export default async function showOptions() {
  const options = {
    method: "GET",
    url: "https://engagement-continental.vercel.app/options",
  };

  return await tryRequest(options);
}
