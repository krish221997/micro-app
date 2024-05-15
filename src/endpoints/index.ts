import axios from "axios";

interface IProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  headers?: object;
  payload?: object;
}

export const domain = "https://api.integrationos.com/v1";

export const keys = {
  "list.connection.definitions": "connection.definition.list",
  "list.connections": "connections.list",
}

export const api = async ({ method, url, headers, payload }: IProps) => {

  const { data } = await axios({
    method,
    url,
    headers,
    data: payload,
  });

    return data;

};
