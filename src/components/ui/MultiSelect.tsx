import React from "react";
import Select from "./Select";

type Props = React.ComponentProps<typeof Select>;

export default function MultiSelect(props: Props) {
  return <Select multiple {...props} />;
}
