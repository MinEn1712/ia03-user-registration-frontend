import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { getAccessToken, removeAccessToken } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [token, setToken] = React.useState<string | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    setToken(getAccessToken());
  }, []);

  const handleLogout = () => {
    removeAccessToken();
    setToken(null);
    navigate({ to: "/login" });
  };

  return (
    <div className="px-4">
      <div className="p-2 flex justify-between gap-2 text-lg">
        <div className="flex gap-2">
          <Link to="/" activeOptions={{ exact: true }} className="font-bold">
            IA03
          </Link>
        </div>
        <div className="flex gap-2">
          {token ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Link
                to="/login"
                activeProps={{
                  className: "font-bold",
                }}
              >
                Login
              </Link>
              <Link
                to="/register"
                activeProps={{
                  className: "font-bold",
                }}
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
