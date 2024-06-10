import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const response = await client.api.accounts.$get();

      if (!response.ok) {
        throw new Error("Failed to get accounts");
      }

      // await new Promise((resolve) => setTimeout(resolve, 2000));
      const { data } = await response.json();

      return data;
    },
  });
};
