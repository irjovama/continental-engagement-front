import axios from "axios";
import { insomniaJSON } from "./insomnia.json";

export async function insomniaRequest({
  resourceName,
  customParameters,
  customQuery,
  customBody,
  customHeaders,
  baseURI = "https://engagement-continental.vercel.app",
}) {
  const json = insomniaJSON.resources.find(
    (resource) => resource.name == resourceName
  );
  if (json) {
    json.url = json.url.replace("{{ _.url }}", baseURI);
    const paramsArray = objToArr(customParameters);
    for (let param of paramsArray) {
      json.url = json.url.replace("{{ _." + param.name + " }}", param.value);
    }
    const headers = arrToObj(json.headers);
    delete headers["User-Agent"];
    const options = {
      method: json.method,
      url: json.url,
      data: customBody || {},
      params: { ...arrToObj(json.parameters), ...customQuery },
      headers: { ...headers, ...customHeaders },
    };
    console.log(options)
    return await tryRequest(options);
  } else {
    throw new Error("No existe el recurso", resourceName);
  }
}

function objToArr(object) {
  const arr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      const item = { name: key, value: value };
      arr.push(item);
    }
  }
  return arr;
}

function arrToObj(parametersArray) {
  const params = {};
  for (let parameter of parametersArray) {
    params[parameter.name] = parameter.value;
  }
  return params;
}

async function tryRequest(options) {
  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
