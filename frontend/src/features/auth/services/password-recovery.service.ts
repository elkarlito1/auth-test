import { api } from "@/shared/api";
import { TypeNewPasswordSchema, TypePasswordResetSchema } from "../schemes";
import { IUser } from "../types/index";

class PasswordRecoveryService {
  public async reset(body: TypePasswordResetSchema) {
    const response = await api.post<IUser>(
      "auth/password-recovery/reset",
      body,
    );

    return response;
  }
  public async newPassword(token: string, dto: TypeNewPasswordSchema) {
    const response = await api.post<IUser>(
      `auth/password-recovery/new/${token}`,
      dto,
    );

    return response;
  }
}

export const passwordRecoveryService = new PasswordRecoveryService();
