import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ cat, filter, sort }) => {
  console.log(cat, filter, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5001/api/products?category=${cat}`
            : "http://localhost:5001/api/products"
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      console.log("here check here");
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  // console.log(Object.entries({ name: "ThaiBinh", title: "Dep trai" }));
  // const hobbies = ["violet", "guitar"];
  // const o = {
  //   name: "ThaiBinh",
  //   hobbies: hobbies,
  // };
  // console.log(o);
  // Object.entries({ name: "ThaiBinh", hobbies: "guitar" }).every((item) => {
  //   console.log(item);
  //   console.log(item[0], item[1]);
  //   console.log(o[item[0]].includes(item[1]));
  //   return o[item[0]].includes(item[1]);
  // });

  console.log(filteredProducts);
  console.log(cat);
  return (
    <Container>
      {filteredProducts.length !== 0
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
