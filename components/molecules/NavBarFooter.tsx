import React from "react";
import { Avatar } from "antd";
import { PiDoorOpenBold } from "react-icons/pi";

import { cn } from "@/lib/utils";
import NavMenuContainer from "../atoms/NavMenuContainer";
import NavButton from "./NavButton";

export interface NavFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const NavFooter = React.forwardRef<HTMLDivElement, NavFooterProps>(
  (props, ref) => {
    const { className, ...restProps } = props;

    return (
      <NavMenuContainer
        ref={ref}
        className={cn("gap-1", className)}
        {...restProps}
      >
        <Avatar />

        <NavButton title='logout' type='text' icon={<PiDoorOpenBold />} />
      </NavMenuContainer>
    );
  }
);

export default NavFooter;
