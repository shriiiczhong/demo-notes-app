import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../lib/contextLib";

function querystring(name: string, url = window.location.href) {
  const parsedName = name.replace(/[[]]/g, "\\$&");
  const regex = new RegExp(`[?&]${parsedName}(=([^&#]*)|&|#|$)`, "i");
  const results = regex.exec(url);

  if (!results || !results[2]) {
    return false;
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function AuthenticatedRoute({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${pathname}${search}`} />;
  }

  return children;
}
