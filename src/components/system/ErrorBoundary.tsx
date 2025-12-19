import React from "react";

type Props = { fallback?: React.ReactNode; children: React.ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <div className="p-4 text-sm text-red-700">Something went wrong.</div>;
    }
    return this.props.children;
  }
}
