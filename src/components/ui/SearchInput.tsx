import React from "react";
import Input from "./Input";

export default function SearchInput(props: React.ComponentProps<typeof Input>) {
  return <Input type="search" {...props} />;
}
