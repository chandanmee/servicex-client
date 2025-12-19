import React from "react";

type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className = "", ...rest }: Props) {
  return <label className={`text-sm text-gray-700 ${className}`} {...rest} />;
}
