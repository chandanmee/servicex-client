import React from "react";
import Input from "./Input";

export default function DatePicker(props: React.ComponentProps<typeof Input>) {
  return <Input type="date" {...props} />;
}
