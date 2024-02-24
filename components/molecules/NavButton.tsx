import { Button, Tooltip, type ButtonProps } from "antd";
import React from "react";

import { cn } from "@/lib/utils";

interface NavButtonProps extends Omit<ButtonProps, "size" | "children"> {
  title: string;
}

const NavButton = React.forwardRef<HTMLDivElement, NavButtonProps>(
  (props, ref) => {
    const { className, title, ...restProps } = props;
    return (
      <Tooltip title={title} placement='right'>
        <Button
          ref={ref}
          size='large'
          shape='circle'
          className={cn("flex items-center justify-center", className)}
          {...restProps}
        />
      </Tooltip>
    );
  }
);

export default NavButton;
