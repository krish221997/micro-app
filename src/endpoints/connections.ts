import { api, domain } from ".";

export const listConnectionsApi = () => api({
    method: "GET",
    url: `${domain}/connections?limit=100&skip=0`,
    payload: {},
    headers: {
        "X-IntegrationOS-Secret": process.env.NEXT_PUBLIC_INTEGRATIONOS_API_KEY as string,
    }
})