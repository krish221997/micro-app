import { keys } from "@/endpoints";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const useClickSyncInvoicesUx = () => {
  const queryClient = useQueryClient();

  const [isLoading, setLoading] = useState<boolean>();

  const trigger = async () => {
    setLoading(true);

    await queryClient.invalidateQueries({
      queryKey: [keys["list.invoices"]],
    });

    setLoading(false);
  };

  return {
    trigger,
    isLoading
  };
};
