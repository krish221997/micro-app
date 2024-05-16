import { api } from ".";

export const listInvoicesApi = (connections: string[]) =>
  api({
    method: "POST",
    url: `${window.location.origin}/api/unify`,
    payload: {
        connections
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
