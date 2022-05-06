import React from 'react'
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,Navigate
} from "react-router-dom";
import {mobile} from "./../Responsive";

const Container = styled.div`
  flex: 1;
  margin : 3px;
  height: 70vh;
  position: relative;
  `;

const Img = styled.img`
  width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    ${mobile({ height: "40vh" })}

  `;
const Title = styled.h1`
color:white;
margin:20px;
`;
const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:rgba(0,0,0,0.4);
    border-radius: 12px;
`;
const Button = styled.button`
border:none;
padding:10px;
background:white;
color:gray;
cursor:pointer;
font-weight:600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
    <Link></Link>
    <Img src={item.img}/>
    <Info>
    <Title>{item.title}</Title>
    <Button>SHOP NOW</Button>
    </Info>
    </Container>
  )
}

export default CategoryItem