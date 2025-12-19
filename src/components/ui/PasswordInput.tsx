import React from "react";
import Input from "./Input";

export default function PasswordInput(props: React.ComponentProps<typeof Input>) {
  return <Input type="password" {...props} />;
}
