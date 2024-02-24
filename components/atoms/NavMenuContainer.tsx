import React from "react";

import { cn } from "@/lib/utils";

export interface NavMenuContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  backfill?: boolean;
}

const NavMenuContainer = React.forwardRef<
  HTMLDivElement,
  NavMenuContainerProps
>((props, ref) => {
  const { children, className, backfill = false, ...restProps } = props;

  return (
    <div
      ref={ref}
      className={cn(
        "grid place-items-center rounded-full",
        backfill && "bg-slate-100",
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
});

export default NavMenuContainer;
