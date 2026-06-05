import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui";
import Link from "next/link";
import { PropsWithChildren } from "react";
import AuthSocials from "./AuthSocials";

interface AuthWrapperProps {
  heading: string;
  description?: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  isShowSocial?: boolean;
}

const AuthWrapper = ({
  children,
  heading,
  description,
  backButtonHref,
  backButtonLabel,
  isShowSocial,
}: PropsWithChildren<AuthWrapperProps>) => {
  return (
    <Card className="w-[400px]">
      <CardHeader className="space-y-2">
        <CardTitle>{heading}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {isShowSocial && <AuthSocials />}
        {children}
      </CardContent>
      <CardFooter>
        {backButtonLabel && backButtonHref && (
          <Button variant="link" className="w-full font-normal">
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthWrapper;
