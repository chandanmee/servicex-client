import React from "react";
import Input from "./Input";

export default function DateTimePicker(props: React.ComponentProps<typeof Input>) {
  return <Input type="datetime-local" {...props} />;
}
