type Size = "sm" | "md" | "lg";
type Variant = "default" | "primary" | "success" | "warning" | "danger";

function btn(variant: Variant, size: Size) {
  const base = "inline-flex items-center rounded";
  const pad = size === "sm" ? "px-2 py-1 text-xs" : size === "lg" ? "px-5 py-3 text-base" : "px-4 py-2 text-sm";
  const map: Record<Variant, string> = {
    default: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  return `${base} ${pad} ${map[variant]}`;
}

function badge(variant: Variant, size: Size) {
  const base = "inline-flex items-center rounded";
  const pad = size === "sm" ? "px-2 py-0.5 text-xs" : size === "lg" ? "px-4 py-1.5 text-sm" : "px-3 py-1 text-sm";
  const map: Record<Variant, string> = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-primary-100 text-primary-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800"
  };
  return `${base} ${pad} ${map[variant]}`;
}

function input(size: Size) {
  const pad = size === "sm" ? "px-2 py-1 text-sm" : size === "lg" ? "px-4 py-3 text-base" : "px-3 py-2 text-sm";
  return `border rounded ${pad} focus:outline-none focus:ring-2 focus:ring-primary-500`;
}

export const variants = {
  button: btn,
  badge,
  input
};
