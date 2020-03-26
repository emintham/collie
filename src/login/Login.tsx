import React from "react";
import { AppName } from "../constants";
import InputContainer from "../clarity/InputContainer";
import PasswordContainer from "../clarity/PasswordContainer";
import Input from "../clarity/Input";

const Login = (): JSX.Element => (
  <div className={"login-wrapper"}>
    <form className={"login"}>
      <section className={"title"}>
        <h3 className={"welcome"}>Welcome to</h3>
        {AppName}
      </section>
      <div className={"login-group"}>
        <InputContainer>
          <Input label={"Username"} name={"username"} />
        </InputContainer>
        <PasswordContainer>
          <Input label={"Password"} name={"password"} isPassword={true} />
        </PasswordContainer>
        <button type="submit" className={"btn btn-primary"}>
          NEXT
        </button>
        <a href="/signup" className={"signup"}>
          Sign up
        </a>
      </div>
    </form>
  </div>
);

export default Login;
