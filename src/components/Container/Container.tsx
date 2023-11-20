import React from "react";

export interface ContainerProp {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: ContainerProp) {
  return (
    <div
      data-testid="Container"
      className={`max-w-[1440px] mx-auto px-5 ${className}`}
    >
      {children}
    </div>
  );
}
