import React, { ReactNode } from "react";
import { Header, Footer } from "../";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center">
        <div className="w-80%">
          <Header />
        </div>
      </div>
      <div className="flex justify-center bg-lightgray flex-grow">
        <div className="w-80%">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
