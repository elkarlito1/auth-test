"use client";

import { useMutation } from "@tanstack/react-query";
import { TypeLoginSchema } from "../schemes";
import { authService } from "../services";
import { toastMessageHandler } from "@/shared/utils/index";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useLoginMutation() {
  const router = useRouter();

  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationKey: ["login key"],
    mutationFn: (values: TypeLoginSchema) => authService.login(values),

    onSuccess(data: any) {
      if (data.message) {
        toastMessageHandler(data.message);
      } else {
        toast.success("Успешная авторизация.");
        router.push("/dashboard/settings");
      }
    },

    onError(error) {
      toastMessageHandler(error);
    },
  });

  return { login, isLoadingLogin };
}
