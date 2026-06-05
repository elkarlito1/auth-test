"use client";

import { Toaster } from "@/shared/components/ui";

const ToastProvider = () => {
  return <Toaster position="top-center" duration={6000} />;
};

export default ToastProvider;
