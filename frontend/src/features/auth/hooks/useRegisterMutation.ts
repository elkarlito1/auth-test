import { useMutation } from "@tanstack/react-query";
import { TypeRegisterSchema } from "../schemes";
import { authService } from "../services";
import { toastMessageHandler } from "@/shared/utils/index";
import { toast } from "sonner";

export function useRegisterMutation() {
  const { mutate: register, isPending: isLoadingRegister } = useMutation({
    mutationKey: ["register key"],
    mutationFn: (values: TypeRegisterSchema) => authService.register(values),
    onSuccess(data: any) {
      toastMessageHandler(data);
    },
    onError(error) {
      toastMessageHandler(error);
    },
  });

  return { register, isLoadingRegister };
}
