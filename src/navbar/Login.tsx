import React from "react";
import HeaderAction from "../clarity/HeaderAction";

const Login = (): JSX.Element => (
  <HeaderAction>
    <a href="/login" className={"nav-link nav-text"}>
      Login
    </a>
  </HeaderAction>
);

export default Login;
