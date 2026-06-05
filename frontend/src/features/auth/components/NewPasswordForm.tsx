"use client";
import {
  NewPasswordSchema,
  PasswordResetSchema,
  TypeNewPasswordSchema,
  TypePasswordResetSchema,
} from "../schemes";
import AuthWrapper from "./AuthWrapper";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Field,
  FieldError,
  FieldLabel,
  Input,
} from "@/shared/components/ui/index";
import { useNewPasswordMutation } from "../hooks";
import { useSearchParams } from "next/navigation";

export function NewPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useForm<TypeNewPasswordSchema>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
      passwordRepeat: "",
    },
  });

  const { newPassword, isLoadingNewPassword } = useNewPasswordMutation();
  const onSubmit = (values: TypeNewPasswordSchema) => {
    if (token) {
      newPassword({
        token,
        dto: values,
      });
    }
  };

  return (
    <AuthWrapper heading="Новый пароли" backButtonHref="/auth/login">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>

              <Input
                disabled={isLoadingNewPassword}
                {...field}
                id="password"
                type="password"
                aria-invalid={fieldState.invalid}
                placeholder="Введите ваш пароль"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="passwordRepeat"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="passwordRepeat">Повторите пароль</FieldLabel>

              <Input
                disabled={isLoadingNewPassword}
                {...field}
                id="passwordRepeat"
                type="password"
                aria-invalid={fieldState.invalid}
                placeholder="Повторите пароль"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <div className="flex justify-center">
          <Button disabled={isLoadingNewPassword} type="submit">
            Восстоновить пароль
          </Button>
        </div>
      </form>
    </AuthWrapper>
  );
}
