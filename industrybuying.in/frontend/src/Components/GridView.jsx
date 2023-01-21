import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }) => {
    // console.log('products: ', products);
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
    
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
   
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color:${({ theme }) => theme.colors.bg} ;
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
      text-align:left;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .cart-data-button{
      width:90%;
      margin:auto;
      display:flex;
      justify-content: space-between;
      padding:2rem 0;
    
    .cart-data-buy{
     background-color:rgb(249,135,0);
     font-size:1rem;
    }
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    h3 {
      font-size:2rem;
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default GridView;