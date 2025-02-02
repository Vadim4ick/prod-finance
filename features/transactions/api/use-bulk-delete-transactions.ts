import { client } from "@/lib/hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { toast } from "sonner";

type ResposeType = InferResponseType<
  (typeof client.api.transactions)["bulk-delete"]["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api.transactions)["bulk-delete"]["$post"]
>["json"];

export const useBulkDeleteTransactions = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResposeType, {}, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions["bulk-delete"]["$post"]({
        json,
      });

      return await response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["summary"] });
      toast.success("Transactions deleted");
    },
    onError: () => {
      toast.error("Failed to delete transaction");
    },
  });

  return mutation;
};
