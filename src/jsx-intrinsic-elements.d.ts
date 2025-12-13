import type * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      rb: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
