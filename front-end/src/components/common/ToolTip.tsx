import React, { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  const name = (children as any).type.name;
  let style = '';
  if (name === 'ButtonOpenModal') {
    style =
      ' absolute right-0 -top-10 bg-customBlack text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible sm:group-hover:invisible';
  } else {
    style =
      ' absolute -right-10 -top-10 bg-customBlack text-white p-2 rounded-md opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible';
  }

  return (
    <div className="relative inline-block group">
      {children}
      <div className={style}>{text}</div>
    </div>
  );
};

export default Tooltip;
