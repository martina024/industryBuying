import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const Product = ({_id,images,title,price,category}) => {
  return (
    <>
      <Card maxW="400px" style={{"box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} maxH="600px" key={_id} >
              <CardBody>
                <Image
                  src={images[0].image_url}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  height="200px"
                  widht="100%"
                  style={{"justifyContent":"center","alignItems":"center"}}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{category}</Heading>
                  <Text>
                   {title.slice(0, 60)}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    ${price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                <Link to="/payment"><Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  </Link>
                  <Link to="/cart">
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                  </Link>
                </ButtonGroup>
              </CardFooter>
            </Card>
    </>
  )
}

export default Product
