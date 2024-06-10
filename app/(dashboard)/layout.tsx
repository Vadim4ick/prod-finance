import { Header } from "@/components/Header/header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />

      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default Layout;
