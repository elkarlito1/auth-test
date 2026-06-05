"use client";
import { LoginSchema, TypeLoginSchema } from "../schemes";
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
import { useLoginMutation } from "../hooks";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, isLoadingLogin } = useLoginMutation();

  const onSubmit = (values: TypeLoginSchema) => {
    login(values);
  };

  return (
    <AuthWrapper
      heading="Авторизация"
      description="Чтобы войти на сайт введите ваш емейл и пароль"
      backButtonLabel="Нет аккаунт? Зарегистрироватся"
      backButtonHref="/auth/register"
      isShowSocial
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                disabled={isLoadingLogin}
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

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>
              <Link
                href="/auth/reset-password"
                className="ml-auto inline-block text-sm underline"
              >
                Забыли пароль?
              </Link>
              <Input
                disabled={isLoadingLogin}
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
        <div className="flex justify-center">
          <Button disabled={isLoadingLogin} type="submit">
            Авторизация
          </Button>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default LoginForm;
