import React, { ReactNode } from "react";

interface ICardProps {
  title?: string;
  children: ReactNode | string;
  header?: CardHeader;
  footer?: CardFooter;
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

const Card = (props: ICardProps): JSX.Element => {
  let content = null;
  if (typeof props.children === "string") {
    content = <div className={"card-text"}>{props.children}</div>;
  } else {
    content = props.children;
  }

  return (
    <div className={"card"}>
      {props.header}
      <div className={"card-block"}>
        {props.title && <CardTitle title={props.title} />}
        {content}
      </div>
      {props.footer}
    </div>
  );
};

export default Card;
