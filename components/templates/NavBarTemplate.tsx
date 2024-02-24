import React from "react";

export interface NavBarTemplateProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const NavBarTemplate: React.FC<NavBarTemplateProps> = (props) => {
  const { header, children, footer } = props;

  return (
    <div className='size-full flex flex-col items-center justify-between gap-8'>
      {header}
      {children}
      {footer}
    </div>
  );
};

export default NavBarTemplate;
