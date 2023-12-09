import React from "react";
import { Navigate } from "react-router-dom"; // handle redirects in react-router-dom

type Props = {
  children: React.ReactNode;
};

const PrivateRoutes = (props: Props): JSX.Element => {
  const name = localStorage.getItem("name");

  if (!name) return <Navigate to="/login" />;

  return props.children as JSX.Element;
};
export default PrivateRoutes;
