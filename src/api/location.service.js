import { api } from "./api";
const SERVICE_ENDPOINT = `${api.server + api.apiVersion}/location`;

export const getLocationLis= async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT);
    return response.json();
  } catch {
    throw new Error("could not fetch users");
  }
};
