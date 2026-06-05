"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useVerificationMutaion } from "../hooks";
import AuthWrapper from "./AuthWrapper";
import { Loading } from "@/shared/components/ui/index";

export function NewVerificationForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const { verification } = useVerificationMutaion();

  useEffect(() => {
    verification(token);
  }, [token]);

  return (
    <AuthWrapper heading="Подтверждения почты">
      <div>
        <Loading />
      </div>
    </AuthWrapper>
  );
}
