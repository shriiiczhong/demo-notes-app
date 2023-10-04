import { cloneElement, ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../lib/contextLib";

interface Props {
  children: ReactElement;
}

export default function UnauthenticatedRoute(props: Props) {
  const { isAuthenticated } = useAppContext();
  const { children } = props;
  const redirect = querystring("redirect");

  if (isAuthenticated) {
    return <Navigate to={redirect || "/"} />;
  }

  return cloneElement(children, props);
}
