import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import React from "react";

interface INavProps {
  to: string;
  children?: ReactNode;
}

const NavLink = (props: INavProps): JSX.Element => {
  const active = useLocation().pathname === props.to ? "active" : "";

  return (
    <Link className={`${active} nav-link`} to={props.to}>
      {props.children}
    </Link>
  );
};

export default NavLink;
