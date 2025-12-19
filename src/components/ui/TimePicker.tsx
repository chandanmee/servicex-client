import React from "react";
import Input from "./Input";

export default function TimePicker(props: React.ComponentProps<typeof Input>) {
  return <Input type="time" {...props} />;
}
