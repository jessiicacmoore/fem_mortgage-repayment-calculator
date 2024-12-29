import React from "react";
import Footer from "./Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
