import NavBar from "@/components/NavBar";
import React from "react";

const PageLayout: React.FC<{ full?: boolean, children: React.ReactNode}> = ({
  full = false, children }) => {

  return (
    <div className="bg-white ">
      <NavBar />
      <div className="px-48 pt-8 mx-auto flex flex-col justify-center ">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;