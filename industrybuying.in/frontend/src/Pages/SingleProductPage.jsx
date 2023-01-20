/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../Redux/AppReducer/action";
import styled from "styled-components";
import { Container } from "../styles/Container";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

import StaticSingleData from "../Components/StaticSingleData";
import PageNavigation from "./PageNavigation";
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text,Button } from "@chakra-ui/react";

const SingleProduct = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.AppReducer.products);
  const [currentProduct, setCurrentProduct] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  });
  useEffect(() => {
    if (id) {
      const Product = products.find((item) => item._id === id);
      console.log(Product);
      Product && setCurrentProduct(Product);
    }
  }, [id, products]);
  console.log(currentProduct);
  //  const image = currentProduct.images;
  //  console.log(image);

  return (
    <Wrapper>
      <PageNavigation title={currentProduct.brand} />
      <Container className="container">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          bgGradient="grey.600">
            
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "500px" }}
            src="https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.52125501_1668012170997.webp"
            alt="Caffe Latte"
            maxH={{base:"100%"}}
          />

          <Stack>
            <CardBody>
              <Heading size="2xl">Brand : {currentProduct.brand}</Heading>
               <br/>
              <Text fontSize='2xl'>
                <b>Title:</b> {currentProduct.title}
              </Text>
              <br/>
              <Text  fontSize='2xl'>
              <b>Category:</b> {currentProduct.category}
              </Text>
              <br/>
              <Text fontSize='2xl'>
              <b> Sub_category:</b> {currentProduct.sub_category}
              </Text>
              <br/>
              <Heading size="xl">
                Price: ${currentProduct.price}
              </Heading>
            </CardBody>

              <Button variant="solid" colorScheme="blue" size='lg'>
                Buy Now
              </Button>
            <Button variant="solid" colorScheme="blue" size='lg'
              bgGradient='linear(to-r, teal.500, green.500)'
              _hover={{
                bgGradient: 'linear(to-r, red.500, yellow.500)',
              }}>
                Add to Card
              </Button>
          </Stack>
        </Card>
        <StaticSingleData />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
background:rgb(243,243,243);
  padding:0 100px;
  .container {
    padding: 1rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 2rem;
    .product-name {
      font-size: 24px;
    }
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: blue;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }

    .product-data-button {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      .product-button-data {
        text-align: center;
        .Buy-Now {
          background-color: rgb(249, 135, 0);
        }
      }
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 360px) {
    padding: 0 2.4rem;
    .product-data-button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      gap: 20px;
      font-size: 1.5rem;
      .product-button-data {
        text-align: center;
        .Buy-Now {
          background-color: rgb(249, 135, 0);
        }
      }
    }
  }
`;

export default SingleProduct;
