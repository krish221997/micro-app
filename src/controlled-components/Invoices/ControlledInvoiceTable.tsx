import { columns } from "@/components/tables/invoices/columns";
import { DataTable } from "@/components/tables/invoices/data-table";
import useListInvoices from "@/hooks/useListInvoices";
import { useClickSyncInvoicesUx } from "@/hooks/ux/useClickSyncInvoicesUx";

export const ControlledInvoiceTable = () => {
  const { data, isLoading } = useListInvoices();

  const { trigger, isLoading: isSyncing } = useClickSyncInvoicesUx();

  return (
    <div className="container mx-auto py-10">
      <DataTable
        onClickSync={trigger}
        columns={columns}
        data={data}
        isLoading={isLoading || isSyncing || !data}
      />
    </div>
  );
};
