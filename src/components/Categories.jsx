import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../reponsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories &&
        categories.map((item) => <CategoryItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Categories;
