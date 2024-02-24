import React from "react";

export interface DashboardTemplateProps {
  navBar?: React.ReactNode;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = (props) => {
  const { navBar, aside, children } = props;

  return (
    <main className='w-full min-w-[80rem] h-screen grid grid-cols-12 *:h-screen *:p-5 overflow-hidden'>
      <div className=' bg-slate-50'>{navBar}</div>

      <div className='col-span-8 bg-slate-100 overflow-y-auto'>
        <div className='content mx-auto '>{children}</div>
      </div>

      <div className='col-span-3 bg-slate-50 overflow-y-auto '>{aside}</div>
    </main>
  );
};

export default DashboardTemplate;
