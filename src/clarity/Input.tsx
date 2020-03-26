import React from "react";
import Icon from "./Icon";

interface IInput {
  label: string;
  name: string;
  placeholderText?: string;
  isPassword?: boolean;
}

const TextInput = (props: IInput) => (
  <input
    className={"clr-input"}
    type={props.isPassword ? "password" : "text"}
    name={props.name}
    placeholder={props.placeholderText ? props.placeholderText : props.label}
  />
);

const PasswordInput = (props: IInput) => (
  <div className={"clr-input-group"}>
    <TextInput {...props} />
    <button className={"clr-input-group-icon-action"} type="button">
      <Icon shape="eye" />
    </button>
  </div>
);

const Input = (props: IInput) => (
  <React.Fragment>
    <label className={"clr-sr-only clr-control-label"}>{props.label}</label>
    <div className={"clr-control-container"}>
      <div className={"clr-input-wrapper"}>
        {props.isPassword ? (
          <PasswordInput {...props} />
        ) : (
          <TextInput {...props} />
        )}
      </div>
    </div>
  </React.Fragment>
);

export default Input;
