import React from "react";
import { PiChatsBold } from "react-icons/pi";

import { cn } from "@/lib/utils";
import NavBarMenuContainer from "../atoms/NavMenuContainer";
import Logo from "../atoms/Logo";
import NavBarButton from "./NavButton";

export interface NavBarHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const NavBarHeader = React.forwardRef<HTMLDivElement, NavBarHeaderProps>(
  (props, ref) => {
    const { className, ...restProps } = props;

    return (
      <NavBarMenuContainer
        ref={ref}
        className={cn("gap-8", className)}
        {...restProps}
      >
        <Logo />

        <NavBarButton
          title='messages'
          type='text'
          className='bg-amber-200'
          icon={<PiChatsBold />}
        />
      </NavBarMenuContainer>
    );
  }
);

NavBarHeader.displayName = "NavBarHeader";
export default NavBarHeader;
