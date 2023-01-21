import React, { useState } from 'react'
import { Box, Button, Image, Input, Icon, Text, Link, useDisclosure } from "@chakra-ui/react";
import {RxAvatar} from "react-icons/rx"
import {GoTriangleDown, GoLocation} from "react-icons/go"
import {BsCart3} from "react-icons/bs"
import { useNavigate } from 'react-router';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {

  const navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()


  const [search,setSearch]=useState("")

  return (
    <Box w="100%" bg="white" position={"fixed"} zIndex={1} >
    <Box mr="20px" display={"flex"} justifyContent={"right"} >
    <Text as='b' fontSize={"14px"} >For any query, email us at <span style={{color:"red"}} >care@industrybuying.com</span> or call us on <span style={{color:"red"}} >+91 8448449073</span> </Text>
    </Box>



    <Box fontSize='15px' display="flex"  p="30px" h="70px" color="white" alignItems={"center"}  justifyContent="space-between" bg="#232f3e">
    
    <Box>
    <Image src="https://www.industrybuying.com/static/images/industry-buying-white-logo.png"/>
    </Box>
    
    <Box display="flex" >
    <Button  h="40px" color="white" style={{borderRadius: "0px"}} px="30px" bg="#e9611e" >All Categories</Button>
    <Input h="40px" color="black" style={{borderRadius: "0px"}} bg="white" w="450px" placeholder='Search Products by title, supplier, sku, category, brand, etc...' value={search} onChange={(e) => setSearch(e.target.value)} />
    </Box>
    
    <Box display="flex" >
    <Icon m="10px"  boxSize={"30px"}  as={RxAvatar}/>
   
    <Box  >
      <Box  display="flex">
        <Text color="white">
          Sign In
        </Text>
        <Icon ml="25px" mt="5px" as={GoTriangleDown}/>
      </Box>
      <Text as='b'fontSize='15px' color="white">
        My Account
      </Text>
    </Box>

    

    </Box>


    <Box onClick={onOpen} style={{ cursor: 'pointer' }} display="flex" >
    <Icon m="10px"  boxSize={"30px"}  as={GoLocation}/>
   
    <Box>
      <Box  display="flex">
        <Text color="white">
          Track
        </Text>
      </Box>
      <Text as='b' fontSize='15px' color="white">
        Order
      </Text>
    </Box>
    </Box>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  >
          <Box>
            <Image src=""/>
          </Box>
          <Box>
          <ModalHeader>Track Your Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Hey
          </ModalBody>

          <ModalFooter>
            <Button bg="#e9611e" color="white"  onClick={onClose}>
              Track Order
            </Button>
            
          </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>


    <Box  style={{ cursor: 'pointer' }} display="flex" onClick={()=>{navigate(`/cart`)}} >
    <Icon m="10px" color="#e9611e" boxSize={"30px"}  as={BsCart3}/>
   
    <Box>
      <Box  display="flex">
        <Text color="white">
          0
        </Text>
      </Box>
      <Text as='b' fontSize='15px' color="white">
        CART
      </Text>
    </Box>
    </Box>

    <Box >
      <Box display={"flex"} justifyContent="center" alignItems={"center"}  >
        <Link href='https://play.google.com/store/apps/details?id=industrybuying.com.industrybuying' pr="10px">
        <Image src="https://www.industrybuying.com/static/images/android-paly.png"/>
        </Link>
        <Text color="white" >|</Text>
        <Link href='https://apps.apple.com/in/app/industrybuying/id1602345204' pl="10px" >
        <Image src="https://www.industrybuying.com/static/images/ios-play.png"/>
        </Link>
      </Box>
      <Text fontSize='15px' color="white">
        Download the APP!
      </Text>
    </Box>

    </Box>
   </Box>
  )
}

export default Navbar
