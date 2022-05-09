import React, { useState,useEffect } from "react";
import styled from "styled-components";
import {popularProducts} from "../Data";
import Product from "./Product";

const Container = styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
justify-content: space-between;
`;

const Products = ({cat,filter,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);

  useEffect(() => {},[]);
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
