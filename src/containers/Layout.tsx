import React, { FC, ReactElement } from "react";
import Navigation from "./Navigation";
import "../styles/index.css";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactElement;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="max-w-[1366px] px-[130px]">
      <Navigation />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
