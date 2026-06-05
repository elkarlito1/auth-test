"use client";
import { RegisterSchema, TypeRegisterSchema } from "../schemes";
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
import { useRegisterMutation } from "../hooks";

const RegisterForm = () => {
  const form = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const { register, isLoadingRegister } = useRegisterMutation();

  const onSubmit = (values: TypeRegisterSchema) => {
    console.log(values);
    register(values);
  };

  return (
    <AuthWrapper
      heading="Регистрация"
      description="Чтобы войти на сайт введите ваш емейл и пароль"
      backButtonLabel="Уже есть аккаунт? Войти"
      backButtonHref="/auth/login"
      isShowSocial
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Введите ваше имя</FieldLabel>

              <Input
                disabled={isLoadingRegister}
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="Введите ваше имя"
                autoComplete="off"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                disabled={isLoadingRegister}
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

              <Input
                disabled={isLoadingRegister}
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
                disabled={isLoadingRegister}
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
          <Button disabled={isLoadingRegister} type="submit">
            Зарегистрироватся
          </Button>
          <div className="flex justify-center"></div>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default RegisterForm;
