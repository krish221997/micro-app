import { keys } from "@/endpoints";
import { listInvoicesApi } from "@/endpoints/invoices";
import { useQuery } from "@tanstack/react-query";
import useListConnections from "./useListConnections";
import { InvoiceWithConnection } from "@/types/invoices";
import useListConnectionDefinitions from "./useListConnectionDefinitions";
import { Connections } from "@/types/connections";
import { ConnectionDefinitions } from "@/types/connection-definition";

function mapConnectionsWithDefinitions(
  connections: Connections,
  connectionDefinitions: ConnectionDefinitions
) {
  return connections.rows?.map((connection) => {
    const connectionDefinition = connectionDefinitions.rows?.find(
      (def) => def._id === connection.connectionDefinitionId
    );

    return {
      name: connectionDefinition?.frontend?.spec?.title,
      image: connectionDefinition?.frontend?.spec?.image,
      connectionKey: connection.key,
    };
  });
}

export default function useListInvoices() {
  const { data, isLoading: isLoadingConnections } = useListConnections();

  const {
    data: connectionDefinitions,
    isLoading: isLoadingConnectionDefinitions,
  } = useListConnectionDefinitions();

  const connections = data?.rows?.map((c) => c.key);

  const { data: invoices, isLoading } = useQuery<InvoiceWithConnection[]>({
    queryKey: [keys["list.invoices"]],
    queryFn: () => listInvoicesApi(connections ?? []),
    refetchOnWindowFocus: true,
    enabled: !isLoadingConnections && !isLoadingConnectionDefinitions,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const connectionMapping =
    data &&
    connectionDefinitions &&
    mapConnectionsWithDefinitions(data, connectionDefinitions);

  const finalData = invoices?.map((invoice: InvoiceWithConnection) => {
    return {
      id: invoice.id,
      invoiceNumber: invoice.invoiceNumber,
      total: invoice.total,
      status: invoice.status,
      fullName: invoice.customer?.fullName,
      currency: invoice.currency,
      platform: {
        image: connectionMapping?.find(
          (c) => c.connectionKey === invoice.connectionKey
        )?.image,
        name: connectionMapping?.find(
          (c) => c.connectionKey === invoice.connectionKey
        )?.name,
      },
    };
  });

  return { data: finalData, isLoading };
}
