import { getDomain } from "@/lib/utils";
import { api, domain } from ".";

export const listConnectionsApi = () =>
  api({
    method: "GET",
    url: `${getDomain()}/api/connections`,
    payload: {},
    headers: {
      "Content-Type": "application/json",
    },
  });
