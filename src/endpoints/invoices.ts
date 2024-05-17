import { getDomain } from "@/lib/utils";
import { api } from ".";

export const listInvoicesApi = (connections: string[]) =>
  api({
    method: "POST",
    url: `https://micro-app-jade.vercel.app/api/unify`,
    payload: {
      connections,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
