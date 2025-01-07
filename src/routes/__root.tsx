import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AppLoading } from "../components/Loading/AppLoading";

export const Route = createRootRoute({
  pendingComponent: () => <AppLoading />,
  component: () => <Outlet />,
});
