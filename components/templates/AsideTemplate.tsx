import React from "react";

export interface AsideTemplateProps {
  children?: React.ReactNode;
  cta?: React.ReactNode;
}

const AsideTemplate: React.FC<AsideTemplateProps> = (props) => {
  const { cta, children } = props;

  return (
    <div className='*:mb-5 *:w-full *:h-fit'>
      {children}
      {cta}
    </div>
  );
};

export default AsideTemplate;
