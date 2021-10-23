import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
    </>
  );
};

export default Home;
