import React from "react";
import Input from "./Input";

export default function EmailInput(props: React.ComponentProps<typeof Input>) {
  return <Input type="email" {...props} />;
}
