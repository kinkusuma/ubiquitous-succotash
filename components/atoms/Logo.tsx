import React from "react";

export interface LogoProps {}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className='w-10 h-10 flex items-center justify-center font-semibold text-3xl'
      {...props}
    >
      <a href='/'>S.</a>
    </div>
  );
});

export default Logo;
