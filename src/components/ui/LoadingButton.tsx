import React from "react";
import Button from "./Button";

type Props = React.ComponentProps<typeof Button> & { loading?: boolean };

export default function LoadingButton({ loading, children, className = "", ...rest }: Props) {
  return (
    <Button className={`relative ${className}`} {...rest} disabled={loading || rest.disabled}>
      {loading && <span className="absolute left-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
      {children}
    </Button>
  );
}
