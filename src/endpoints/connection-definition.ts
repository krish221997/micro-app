import { api, domain } from ".";

export const listPublicConnectionDefinitionsApi = () => {
  let url = `${domain}/public/connection-definitions?limit=100&skip=0`;
  return api({
    method: "GET",
    url,
    payload: {},
  });
};
