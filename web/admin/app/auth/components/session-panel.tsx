import { useNavigate } from "react-router";

import { useAuth } from "~/auth/hooks/use-auth";

export function SessionPanel() {
  const navigate = useNavigate();
  const { isPending, signOut, user } = useAuth();

  async function handleSignOut() {
    await signOut();
    void navigate("/login", { replace: true });
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Signed in
        </p>
        <p className="text-sm font-medium text-slate-900">{user?.displayName}</p>
        <p className="text-sm text-slate-600">{user?.email}</p>
      </div>

      <button
        type="button"
        onClick={() => {
          void handleSignOut();
        }}
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        Logout
      </button>
    </div>
  );
}
