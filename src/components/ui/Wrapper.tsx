import React from "react";

interface myProps {
  children: React.ReactNode;
  className: React.ReactNode;
}

const Wrapper: React.FC<myProps> = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1280px] mx-auto h-[60px] md:h-[70px] px-6 md:px-8 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
