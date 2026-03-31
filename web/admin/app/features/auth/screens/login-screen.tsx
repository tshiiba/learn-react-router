import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Flex,
  Heading,
  PasswordField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { useLocation, useNavigate } from "react-router";

import {
  MOCK_AUTH_PASSWORD,
  MOCK_AUTH_USERNAME,
} from "~/auth/clients/mock-auth-client";
import { useAuth } from "~/auth/hooks/use-auth";

function resolveRedirectTarget(rawRedirectTo: string | null) {
  if (!rawRedirectTo || !rawRedirectTo.startsWith("/") || rawRedirectTo.startsWith("//")) {
    return "/";
  }

  return rawRedirectTo;
}

export function LoginScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isPending, signIn } = useAuth();
  const redirectTo = resolveRedirectTarget(
    new URLSearchParams(location.search).get("redirectTo"),
  );

  const [username, setUsername] = useState(MOCK_AUTH_USERNAME);
  const [password, setPassword] = useState(MOCK_AUTH_PASSWORD);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      void navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectTo]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    try {
      await signIn({ username, password });
      void navigate(redirectTo, { replace: true });
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "ログインに失敗しました。",
      );
    }
  }

  return (
    <View as="main" className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="mx-auto min-h-[calc(100vh-5rem)] max-w-5xl"
      >
        <Card className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <Flex direction="column" gap="1.25rem">
            <View>
              <Text className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Closed network admin
              </Text>
              <Heading level={1} className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
                Login
              </Heading>
              <Text className="mt-3 text-base leading-7 text-slate-600">
                未認証ユーザーは必ずこの画面から始まります。現在は Cognito 未接続のため、
                Amplify UI を使ったモック認証で導線だけ先に固定しています。
              </Text>
            </View>

            <View className="rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-700">
              <Text as="p">Mock credentials</Text>
              <Text as="p">Username: {MOCK_AUTH_USERNAME}</Text>
              <Text as="p">Password: {MOCK_AUTH_PASSWORD}</Text>
            </View>

            {errorMessage ? (
              <Alert variation="error" hasIcon={true} heading="Login failed">
                {errorMessage}
              </Alert>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5">
              <TextField
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                isRequired={true}
              />

              <PasswordField
                label="Password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                isRequired={true}
              />

              <Button
                type="submit"
                variation="primary"
                isDisabled={isPending}
                width="100%"
              >
                {isPending ? "Signing in..." : "Sign in"}
              </Button>
            </form>
          </Flex>
        </Card>
      </Flex>
    </View>
  );
}
