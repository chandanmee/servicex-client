import React from "react";
import Input from "./Input";

export default function TextInput(props: React.ComponentProps<typeof Input>) {
  return <Input type="text" {...props} />;
}
