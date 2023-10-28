import axios from "axios";

export async function tryRequest(options) {
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
