import React from "react";
import { Header, ParticlesBg } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <footer>
        <p style={{ textAlign: "center" }}> All rights reserved. @Asgar</p>
      </footer> */}
    </>
  );
};
