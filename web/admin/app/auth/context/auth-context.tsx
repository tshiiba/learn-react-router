import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";

import { mockAuthClient } from "~/auth/clients/mock-auth-client";
import type { AuthContextValue, AuthUser, SignInInput } from "~/auth/types/auth";

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    let isMounted = true;

    void (async () => {
      try {
        const nextUser = await mockAuthClient.getCurrentUser();

        if (isMounted) {
          setUser(nextUser);
        }
      } finally {
        if (isMounted) {
          setIsPending(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  async function signIn(input: SignInInput) {
    setIsPending(true);

    try {
      const nextUser = await mockAuthClient.signIn(input);
      setUser(nextUser);
      return nextUser;
    } finally {
      setIsPending(false);
    }
  }

  async function signOut() {
    setIsPending(true);

    try {
      await mockAuthClient.signOut();
      setUser(null);
    } finally {
      setIsPending(false);
    }
  }

  const value: AuthContextValue = {
    user,
    isAuthenticated: user !== null,
    isPending,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
