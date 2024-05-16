import { keys } from "@/endpoints";
import { useAuthKit } from "@integrationos/authkit";
import { useQueryClient } from "@tanstack/react-query";

export const useOpenAuthKitUx = () => {
  const queryClient = useQueryClient();

  const { open } = useAuthKit({
    token: {
      url: `${window.location.origin}/api/authkit`,
    },
    appTheme: "light",
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [keys["list.connections"]],
      });
    },
  });

  return {
    trigger: open,
  };
};
