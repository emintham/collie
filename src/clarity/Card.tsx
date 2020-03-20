import React, { ReactNode, ReactNodeArray } from "react";

interface ICardProps {
  children: ReactNode | string;
}

interface ICardHeaderProps {
  children?: ReactNode;
}

interface ICardFooterProps {
  children?: ReactNode;
}

interface ICardTitleProps {
  title: string;
}

interface ICardBlockProps {
  title?: string;
  children?: ReactNode;
}

export class CardHeader extends React.PureComponent<ICardHeaderProps> {
  render() {
    return <div className={"card-header"}>{this.props.children}</div>;
  }
}

export class CardFooter extends React.PureComponent<ICardFooterProps> {
  render() {
    return <div className={"card-footer"}>{this.props.children}</div>;
  }
}

const CardTitle = (props: ICardTitleProps): JSX.Element => {
  return <div className={"card-title"}>{props.title}</div>;
};

export const CardBlock = (props: ICardBlockProps): JSX.Element => {
  let content = null;
  if (typeof props.children === "string") {
    content = <div className={"card-text"}>{props.children}</div>;
  } else {
    content = props.children;
  }

  return (
    <div className={"card-block"}>
      {props.title && <CardTitle title={props.title} />}
      {content}
    </div>
  );
};

const Card = (props: ICardProps): JSX.Element => {
  return <div className={"card"}>{props.children}</div>;
};

export default Card;
