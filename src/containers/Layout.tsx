import React, { FC, ReactElement } from "react";
import Navigation from "./Navigation";
import "../styles/index.css";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="overflow-y-scroll h-[100vh] max-w-[1366px] m-auto"
      id="main"
    >
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
