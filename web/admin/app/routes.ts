import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("hogeA", "routes/hoge-a.tsx"),
] satisfies RouteConfig;
