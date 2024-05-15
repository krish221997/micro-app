import { keys } from "@/endpoints";
import { listConnectionsApi } from "@/endpoints/connections";
import { Connections } from "@/types/connections";
import { useQuery } from "@tanstack/react-query";

export default function useListConnections() {
  return useQuery<Connections>({
    queryKey: [keys["list.connections"]],
    queryFn: () => listConnectionsApi(),
    staleTime: 5 * 60 * 1000,
  });
}
