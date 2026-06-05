import { toastMessageHandler } from "@/shared/utils/toast.message.handler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { passwordRecoveryService } from "../services";
import { TypePasswordResetSchema } from "../schemes";

export function usePasswordResetMutation() {
  const { mutate: reset, isPending: isLoadingReset } = useMutation({
    mutationKey: ["reset key"],
    mutationFn: (values: TypePasswordResetSchema) =>
      passwordRecoveryService.reset(values),

    onSuccess() {
      toast.success(
        "Письмо для востоновления пароля отправлена на вашу почту.",
      );
    },

    onError(error) {
      toastMessageHandler(error);
    },
  });

  return { reset, isLoadingReset };
}
