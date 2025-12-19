import React from "react";
import Input from "./Input";

export default function NumberInput(props: React.ComponentProps<typeof Input>) {
  return <Input type="number" {...props} />;
}
