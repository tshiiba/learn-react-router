import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // SPAにするため、サーバーサイドレンダリングを無効化
} satisfies Config;
