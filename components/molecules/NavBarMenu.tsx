import React from "react";

import { cn } from "@/lib/utils";
import NavBarMenuContainer from "../atoms/NavMenuContainer";
import NavBarButton from "./NavButton";

export interface NavBarMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavBarMenuItem[];
  className?: string;
  current: React.Key;
}

export interface NavBarMenuItem {
  className?: string;
  key: React.Key;
  icon: React.ReactNode;
}

export const NavBarMenu = React.forwardRef<HTMLDivElement, NavBarMenuProps>(
  (props, ref) => {
    const { items, className, ...restProps } = props;

    return (
      <NavBarMenuContainer
        ref={ref}
        className={cn("p-1 gap-1", className)}
        {...restProps}
        backfill
      >
        {items?.map((item) => (
          <NavBarButton
            key={item.key}
            title={item.key.toString()}
            type={item.key === props.current ? "primary" : "text"}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </NavBarMenuContainer>
    );
  }
);

NavBarMenu.displayName = "NavBarMenu";
export default NavBarMenu;
