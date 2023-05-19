import React from "react";
import type { FC } from "react";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: FC<MainSectionProps> = ({ children }) => {
  return (
    <div className="h-full w-4/5 bg-secondary rounded-l-3xl">{children}</div>
  );
};

export default MainSection;
