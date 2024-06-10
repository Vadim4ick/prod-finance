import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";

export const useGetCategory = (id?: string) => {
  return useQuery({
    enabled: Boolean(id),
    queryKey: ["category", { id }],
    queryFn: async () => {
      const response = await client.api.categories[":id"].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to get category");
      }

      const { data } = await response.json();

      return data;
    },
  });
};
