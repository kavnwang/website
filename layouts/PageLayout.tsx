import NavBar from "@/components/NavBar";
import React from "react";

const PageLayout: React.FC<{ full?: boolean, children: React.ReactNode}> = ({
  full = false, children }) => {

  return (
    <div>
      <NavBar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;