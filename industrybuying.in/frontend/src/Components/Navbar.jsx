
import { Box, Button, Image, Input, Icon, Text } from "@chakra-ui/react";
import {RxAvatar} from "react-icons/rx"
import {GoTriangleDown} from "react-icons/go"

import React from 'react'

const Navbar = () => {
  return (
   <Box>
    <Box>

    </Box>



    <Box display="flex" p="30px" h="60px" color="white" alignItems={"center"}  justifyContent="space-between" bg="#232f3e">
    
    <Box>
    <Image src="https://www.industrybuying.com/static/images/industry-buying-white-logo.png"/>
    </Box>
    
    <Box display="flex" >
    <Button px="30px" bg="#e9611e" >All Categories</Button>
    <Input bg="white" w="450px" placeholder='Search Products by title, supplier, sku, category, brand, etc...' />
    </Box>
    
    <Box display="flex" >
    <Icon m="10px"  boxSize={"30px"}  as={RxAvatar}/>
   
    <Box>
      <Box display="flex">
        <Text>
          Sign In
        </Text>
        <Icon ml="25px" mt="5px" as={GoTriangleDown}/>
      </Box>
      <Text>
        My Account
      </Text>
    </Box>
    </Box>
    </Box>
   </Box>
  )
}

export default Navbar
