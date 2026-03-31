import { Link } from "react-router";

import { SessionPanel } from "~/auth/components/session-panel";

export function HomeScreen() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <SessionPanel />

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Admin workspace
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Home</h1>
          <p className="text-base leading-7 text-slate-600">
            認証後に最初に到達する業務トップ画面です。route module は薄く保ち、
            画面本体は feature 配下に置く構成を維持しています。
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5 text-sm leading-6 text-slate-700">
          <p>
            このアプリは閉域前提なので、未認証の状態で公開画面には入りません。
            リロードすると認証状態は消え、再び login から始まります。
          </p>
        </div>

        <div>
          <Link
            to="/hogeA"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            HogeAへ移動
          </Link>
        </div>
      </div>
    </main>
  );
}
