import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createActor } from "../backend";
import type { FormData } from "../types";
import { PRICE_PER_UNIT } from "../types";

export function useOrderForm() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      quantity: 1,
    },
    mode: "onBlur",
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      if (!actor) throw new Error("Backend not ready");
      const price = data.quantity * PRICE_PER_UNIT;
      const orderId = await actor.submitOrder(
        data.name,
        data.phone,
        data.address,
        data.city,
        data.state,
        data.pincode,
        BigInt(data.quantity),
        BigInt(price),
      );
      return orderId as string;
    },
    onSuccess: (orderId) => {
      toast.success(`ऑर्डर सफलतापूर्वक प्राप्त हुआ! Order ID: ${orderId}`, {
        duration: 6000,
        description:
          "हम जल्द ही आपसे संपर्क करेंगे। We'll call to confirm your order.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["orderCount"] });
    },
    onError: () => {
      toast.error("Order submission failed. Please try again.", {
        description:
          "Check your details and retry. For help call: 1800-123-4567",
      });
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    submitMutation.mutate(data);
  });

  return {
    form,
    onSubmit,
    isSubmitting: submitMutation.isPending,
    isSuccess: submitMutation.isSuccess,
    orderId: submitMutation.data ?? null,
  };
}
