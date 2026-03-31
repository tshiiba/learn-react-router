import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

import { useAuth } from "~/auth/hooks/use-auth";

export function ProtectedLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, isPending } = useAuth();
  const location = useLocation();

  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        <div className="rounded-3xl bg-white px-6 py-5 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200">
          認証状態を確認しています...
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    const redirectTo = `${location.pathname}${location.search}${location.hash}`;
    const search = new URLSearchParams({ redirectTo });

    return <Navigate to={`/login?${search.toString()}`} replace />;
  }

  return <>{children}</>;
}
