import { toastMessageHandler } from "@/shared/utils/toast.message.handler";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { passwordRecoveryService } from "../services";
import { TypeNewPasswordSchema } from "../schemes";

export function useNewPasswordMutation() {
  const { mutate: newPassword, isPending: isLoadingNewPassword } = useMutation({
    mutationKey: ["new password key"],
    mutationFn: (values: { token: string; dto: TypeNewPasswordSchema }) =>
      passwordRecoveryService.newPassword(values.token, values.dto),

    onSuccess() {
      toast.success("Пароли успешно изменен.");
    },

    onError(error) {
      toastMessageHandler(error);
    },
  });

  return { newPassword, isLoadingNewPassword };
}
