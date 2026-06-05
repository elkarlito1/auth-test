"use client";
import { PasswordResetSchema, TypePasswordResetSchema } from "../schemes";
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
import { usePasswordResetMutation } from "../hooks";

export function ResetPasswordForm() {
  const form = useForm<TypePasswordResetSchema>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const { reset, isLoadingReset } = usePasswordResetMutation();

  const onSubmit = (values: TypePasswordResetSchema) => {
    reset(values);
  };

  return (
    <AuthWrapper heading="Восстоновления пароля" backButtonHref="/auth/login">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                disabled={isLoadingReset}
                {...field}
                id="email"
                aria-invalid={fieldState.invalid}
                placeholder="Введите ваш емейл"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <div className="flex justify-center">
          <Button disabled={isLoadingReset} type="submit">
            Восстоновить пароль
          </Button>
        </div>
      </form>
    </AuthWrapper>
  );
}
