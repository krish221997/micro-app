import { keys } from "@/endpoints";
import { listPublicConnectionDefinitionsApi } from "@/endpoints/connection-definition";
import { ConnectionDefinitions } from "@/types/connection-definition";
import { useQuery } from "@tanstack/react-query";

export default function useListConnectionDefinitions() {
  return useQuery<ConnectionDefinitions>({
    queryKey: [keys["list.connection.definitions"]],
    queryFn: () => listPublicConnectionDefinitionsApi(),
    staleTime: 5 * 60 * 1000,
  });
}
