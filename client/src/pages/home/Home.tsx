import React from "react";
import Hero from "./Hero";
import Header from "../../components/Header";
import CategorySearch from "./CategorySearch";
import CategoryImages from "./CategoryImages";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Hero />
        <CategorySearch/>
        <CategoryImages/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
