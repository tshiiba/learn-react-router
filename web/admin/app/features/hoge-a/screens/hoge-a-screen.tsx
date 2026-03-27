import { Link } from "react-router";

export function HogeAScreen() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-slate-900">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Feature First sample
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">HogeA</h1>
          <p className="text-base leading-7 text-slate-600">
            こちらは HogeA 画面です。feature ごとに screens を分けることで、
            route 側は meta と接続だけに絞れます。
          </p>
        </div>

        <div className="grid gap-3 rounded-2xl bg-sky-50 p-5 text-sm leading-6 text-slate-700">
          <p>配置場所: app/features/hoge-a/screens</p>
          <p>役割: HogeA 画面の見た目と導線を持つ</p>
        </div>

        <div>
          <Link
            to="/"
            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Homeへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
