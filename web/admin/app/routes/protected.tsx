import { Outlet } from "react-router";

import { ProtectedLayout } from "~/auth/guards/protected-layout";

export default function ProtectedRouteLayout() {
  return (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  );
}
