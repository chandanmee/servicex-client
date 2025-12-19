import React from "react";
import Button from "./Button";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  bottom?: number;
  right?: number;
};

export default function Fab({ bottom = 24, right = 24, className = "", ...rest }: Props) {
  return (
    <Button
      className={`fixed rounded-full shadow-lg ${className}`}
      style={{ bottom, right }}
      {...rest}
    />
  );
}
