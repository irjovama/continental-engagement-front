import { tryRequest } from "..";

export default async function showCategories(){
    const options = {
      method: 'GET',
      url: 'https://engagement-continental.vercel.app/categories',
      params: {limit: '1000', page: '1'}
    };
  
    return tryRequest(options);
  }