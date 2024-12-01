import React from "react";
import {
  Aboutus,
  ContactUs,
  Home,
  Layout,
  Projects,
  Skills,
  Teams,
} from "../components";

const Main = () => {
  return (
    <Layout>
      <Home />
      <Aboutus />
      <Skills />
      <Projects />
      <Teams />
      <ContactUs />
    </Layout>
  );
};

export default Main;
