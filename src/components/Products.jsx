import React, { useState,useEffect } from "react";
import styled from "styled-components";
import {popularProducts} from "../Data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
padding: 20px;
    display: flex;
    flex-wrap: wrap;
justify-content: space-between;
`;

const Products = ({cat,filter,sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);

  useEffect(() => {

    const getProducts= async ()=>{
try{
 const res = await axios.get( cat ? `http://localhost:7777/api/product?category=${cat}` : `http://localhost:7777/api/product`);
 setProducts(res.data)
}catch(err){}
    }
    getProducts()
  },[cat]);
  
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
