import { Link } from "react-router";

export function HomeScreen() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Feature First sample
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Home</h1>
          <p className="text-base leading-7 text-slate-600">
            最小構成で Feature First を試すためのホーム画面です。
            route module は薄くして、画面本体は feature 配下に置いています。
          </p>
        </div>

        <div className="rounded-2xl bg-slate-100 p-5">
          <p className="text-sm leading-6 text-slate-700">
            次は HogeA 画面に移動して、画面ごとの責務分離と導線の使用感を確認できます。
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
