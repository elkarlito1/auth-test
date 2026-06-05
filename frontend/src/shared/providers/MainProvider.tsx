"use client";

import { type PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TanStackQueryProvider } from "./TanstackQueryProvider";
import { ThemeProvider } from "./ThemeProvider";
import ToastProvider from "./ToastProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <TanStackQueryProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="auth-theme"
      >
        <ToastProvider />
        {children}
      </ThemeProvider>
    </TanStackQueryProvider>
  );
}
