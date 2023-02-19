import Header from "@/components/header";
import ToTop from "@/components/toTop";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <ToTop />
      {children}
    </>
  );
};
export default CommonLayout;
