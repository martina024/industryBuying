import React, { useState } from 'react'
import { Box, Button, Image, Input, Icon, Text, Link, useDisclosure, Collapse, Popover, PopoverTrigger, PopoverContent, PopoverBody } from "@chakra-ui/react";
import {RxAvatar} from "react-icons/rx"
import {GoTriangleDown, GoLocation} from "react-icons/go"
import {BsCart3} from "react-icons/bs"
import { useNavigate } from 'react-router';
import {GiHamburgerMenu} from "react-icons/gi"
import {CgClose} from "react-icons/cg"


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { style } from '@motionone/dom';

const Navbar = () => {

  const navigate=useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [snavbar,setSnavbar]=useState(false)


  const [search,setSearch]=useState("")

  return (
    <Box w="100%" bg="white" position={"fixed"} zIndex={25} top="0px">
    <Box mr="20px" display={"flex"} justifyContent={"right"} >
    <Text as='b' fontSize={["8px","10px","14px"]} >For any query, email us at <span style={{color:"red"}} >care@industrybuying.com</span> or call us on <span style={{color:"red"}} >+91 8448449073</span> </Text>
    </Box>



    <Box fontSize='15px' display={["none","none","flex"]} p="30px" h="70px" color="white" alignItems={"center"}  justifyContent="space-between" bg="#232f3e">
    
    <Box>
    <Link href='/' ><Image src="https://www.industrybuying.com/static/images/industry-buying-white-logo.png"/></Link>
    </Box>
    
    <Box display="flex" >
    <Button  h="40px" _hover={{backgroundColor:"#e9611e"}} color="white" style={{borderRadius: "0px"}} px="30px" bg="#e9611e" onClick={()=>{navigate(`/allproducts`)}} >All Categories</Button>
    <Input h="40px" color="black" style={{borderRadius: "0px"}} bg="white" w="450px" placeholder='Search Products by title, supplier, sku, category, brand, etc...' value={search} onChange={(e) => setSearch(e.target.value)} />
    </Box>
    
    
    




      <Popover>
        <PopoverTrigger>
          <Box style={{cursor:"pointer"}} display="flex" >
          <Icon m="10px"  boxSize={"30px"}  as={RxAvatar}/>
   
            <Box>
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
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody color={"black"} >
            <Box>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/signup`)}} >Sign Up as a User</Link>
              </Box>
              <hr/>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/login`)}} >Log In as a User</Link>
              
              </Box>
              <hr/>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/admin/signup`)}} >Sign Up as an Admin</Link>
              
              </Box>
              <hr/>
              <Box my="10px" display={"flex"} justifyContent="center" >
              <Link style={{ textDecoration: 'none' }} onClick={()=>{navigate(`/admin/login`)}} >Log In as an Admin</Link>
              
              </Box>
              
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>



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
            Order Something First :)
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
          Check
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



    <Box w="100%" 
          h="70px" 
          p="20px"
          display={["flex","flex","none"]}
          position={"fixed"}
          fontSize='20px'
          bg="#232f3e"
          zIndex={99999}
          align="right">
            <Box position={"absolute"} >
              <Link href='/' ><Image src="https://www.industrybuying.com/static/images/industry-buying-white-logo.png"/></Link>
            </Box>



            <Box ml="60%" position={"absolute"} style={{ cursor: 'pointer' }} display="flex" onClick={()=>{navigate(`/cart`)}} >
                  <Icon m="10px" color="#e9611e" boxSize={"30px"}  as={BsCart3}/>
              </Box>




                <Box w="100%">
                        {snavbar ? <Button  onClick={()=>setSnavbar(!snavbar)}   p="10px" ><Icon boxSize="25px" as={CgClose}/></Button> : <Button bg="#232f3e" onClick={()=>setSnavbar(!snavbar)}   p="10px" ><Icon  color="white" boxSize="25px" as={GiHamburgerMenu}/></Button> } 
       
                        <Collapse in={snavbar} animateOpacity>
                                <Box
                                    p='80px'
                                    mt='4'
                                    bg="#232f3e"
                                    rounded='md'
                                    shadow='dark-lg'
                                    zIndex={99}
                                    display="flex"
                                    flexDirection="column"
                                    align="center"
                                    color="white"
                                    >
                                      
                                    <Button m="10px"  _hover={{backgroundColor:"#e9611e"}} color="white" style={{borderRadius: "0px"}}  bg="#e9611e" onClick={()=>{navigate(`/allproducts`)}} >All Categories</Button>
                                    <hr/>
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={()=>setSnavbar(!snavbar)}  href='/signup'>Sign Up as a User</Link>
                                    <hr/>
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={()=>setSnavbar(!snavbar)}  href="/login">Log In as a User</Link>
                                    <hr/>
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={()=>setSnavbar(!snavbar)}   href="/admin/signup">Sign Up as an Admin</Link>
                                    <hr/>
                                    <Link m="10px" style={{ textDecoration: 'none' }} onClick={()=>setSnavbar(!snavbar)}   href="/admin/login">Log In as an Admin</Link> 
                                </Box>
                            </Collapse>
                    </Box>

                   
          
                </Box>
   </Box>
  )
}

export default Navbar
