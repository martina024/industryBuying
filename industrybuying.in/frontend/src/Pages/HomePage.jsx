import { Box, Center, Container, Flex, HStack, Image, ListItem, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, SimpleGrid, Text, UnorderedList, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';



const HomePage = () => {
  const API = "https://doubtful-wasp-cowboy-boots.cyclic.app/products"
  

  const [products,setProducts]=useState([])
  const [isVisible,setIsVisible] = useState(false);
  const navigate=useNavigate()

  const listenToScroll = () => {
    let heightToHidden = 2500;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll>heightToHidden){
               setIsVisible(true);
    }else{
              setIsVisible(false);
    }
}
useEffect(()=>{
  window.addEventListener('scroll',listenToScroll);
  //for load
  return() => window.removeEventListener('scroll',listenToScroll);
 },[])


  useEffect(() => {
    axios.get(API)
    .then(res=>setProducts(res.data))
    .catch(err=>console.log(err))
    
  }, []);


  
  
  
  
  return (
    <>
      
    <Navbar />
    <Box bg="gray.100" pb="100px" zIndex={999} pt="90px" display={"flex"} >
    {!isVisible && (
      <Box bg="white" display={["none","none","flex"]} py="40px" position={"fixed"} w="20%" >
      <UnorderedList listStyleType="none"  spacing={5} >
      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
               <Box w="100%" style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Agriculture Garden & Landscape</Box>
            </PopoverTrigger>
            
            <PopoverContent ml="93.5%" mt="-10.2%" border="1px solid gray.600" bg="gray.600" color="white"  borderRadius="0px">
            <PopoverBody>
                <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                <Box >
                  <Popover trigger="hover">
                    {({ isOpen, onClose }) => (
                    <>
                    <PopoverTrigger>
                      <ListItem style={{ cursor: 'pointer' }} _hover={{color:"gray.600" , backgroundColor:"white" }}>Grain Processing Machine</ListItem>
                    </PopoverTrigger>
            
                    <PopoverContent ml="93.5%" mt="-12.5%" color="black" borderRadius="0px">
                      <PopoverBody >
                
                    <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >AgriPro</ListItem>
                      <ListItem >Confider</ListItem>
                      <ListItem >RAJA</ListItem>
                      <ListItem >Rico Italy</ListItem>
                      <ListItem >KISANKRAFT</ListItem>
                      <ListItem >Sparrow</ListItem>
                      <ListItem >agrOMill</ListItem>
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 288</ListItem>
                      <ListItem >288 - 576</ListItem>
                      <ListItem >576 - 1152</ListItem>
                      <ListItem >1152 - 2304</ListItem>
                      <ListItem >Above 2304</ListItem>
                    </UnorderedList>
              </PopoverBody>
              </PopoverContent>
          </>
          )}
        </Popover>
      </Box>



      <Box >
                  <Popover trigger="hover">
                    {({ isOpen, onClose }) => (
                    <>
                    <PopoverTrigger>
                      <ListItem style={{ cursor: 'pointer' }} _hover={{color:"gray.600" , backgroundColor:"white" }}>Tillers and Cultivator</ListItem>
                    </PopoverTrigger>
            
                    <PopoverContent ml="93.5%" mt="-22%" color="black" borderRadius="0px">
                      <PopoverBody>
                
                    <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >AgriPro</ListItem>
                      <ListItem >Neptune</ListItem>
                      <ListItem >Honda</ListItem>
                      <ListItem >Greenleaf</ListItem>
                      <ListItem >Kisan Suraksha</ListItem>
                      <ListItem >Xtra Power</ListItem>
                      <ListItem >Balwaan</ListItem>
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Tillers Below 15000</ListItem>
                      <ListItem color="#e9611e" >Main Ctegories</ListItem>
                      <ListItem >Tillers</ListItem>
                      <ListItem >Cultivator</ListItem>
                      <ListItem >Cultivator Attachments</ListItem>
                    </UnorderedList>
              </PopoverBody>
              </PopoverContent>
          </>
          )}
        </Popover>
      </Box>





      <Box >
                  <Popover trigger="hover">
                    {({ isOpen, onClose }) => (
                    <>
                    <PopoverTrigger>
                      <ListItem style={{ cursor: 'pointer' }} _hover={{color:"gray.600" , backgroundColor:"white" }}>Brush Cutter and Accessories</ListItem>
                    </PopoverTrigger>
            
                    <PopoverContent ml="93.5%" mt="-31.5%" color="black" borderRadius="0px">
                      <PopoverBody>
                
                    <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >AgriPro</ListItem>
                      <ListItem >Greenleaf</ListItem>
                      <ListItem >Xtra Power</ListItem>
                      <ListItem >Makita</ListItem>
                      <ListItem >Shwarya</ListItem>
                      <ListItem >Mactan</ListItem>
                      <ListItem >Virat</ListItem>
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Brush Cutter Under 10000</ListItem>
                      <ListItem color="#e9611e" >Main Ctegories</ListItem>
                      <ListItem >Tillers</ListItem>
                      <ListItem >Cultivator</ListItem>
                      <ListItem >Cultivator Attachments</ListItem>
                    </UnorderedList>
              </PopoverBody>
              </PopoverContent>
          </>
          )}
        </Popover>
      </Box>



      <Box >
                  <Popover trigger="hover">
                    {({ isOpen, onClose }) => (
                    <>
                    <PopoverTrigger>
                      <ListItem style={{ cursor: 'pointer' }} _hover={{color:"gray.600" , backgroundColor:"white" }}>Chaff Cutter</ListItem>
                    </PopoverTrigger>
            
                    <PopoverContent ml="93.5%" mt="-41%" color="black" borderRadius="0px">
                      <PopoverBody>
                
                    <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                      <ListItem color="#e9611e">Shop by Brand</ListItem>
                      <ListItem >AgriPro</ListItem>
                      <ListItem >Agrimate</ListItem>
                      <ListItem >Kisan Agri India</ListItem>
                      <ListItem >J.S.P</ListItem>
                      <ListItem >RBD</ListItem>
                      <ListItem >Vidhata</ListItem>
                      <ListItem >NVK</ListItem>
                      <ListItem color="#e9611e" >Shop by Price</ListItem>
                      <ListItem >Below 2399</ListItem>
                      <ListItem >2399 - 4798</ListItem>
                      <ListItem >4798 - 9596</ListItem>
                      <ListItem >9596 - 19192</ListItem>
                      <ListItem >Above 19192</ListItem>
                    </UnorderedList>
              </PopoverBody>
              </PopoverContent>
          </>
          )}
        </Popover>
      </Box>
                  
                  
                </UnorderedList>
             
              
            </PopoverBody>
            </PopoverContent>
          </>
          )}
        </Popover>
      </Box>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Power Tools</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Office Supplies</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Material Handling and Packing</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Pumps</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Automotive Maintence</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Safety</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Cleaning</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Electrical</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Hand Tools</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Testing and Measuring</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >IT & Electronics</ListItem>
        <ListItem style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Furniture, Hospitality</ListItem>
      </UnorderedList>
      </Box>
      )}
      <Box w={["100%","100%","80%"]} ml={["5%","7%","20.5%"]} >
      <Image w={["95%"]} mt="30px" src="https://static3.industrybuying.com/homepage/1663932735Vacuum-Cleaner.jpg"/>
      {/* FURNITURE, HOSPITALITY AND FOOD SERVICE */}
      <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
        FURNITURE, HOSPITALITY AND FOOD SERVICE
      </Text>
      <Box  w="95%" display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Furniture, Hospitality and Food Service").slice(0, 8).map(item=>(
        
        <Box 
        onClick={()=>{navigate(`/product/${item._id}`)}} 
        
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.images[0].image_url}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.sub_category}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.price}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]} >
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1669293231image%20(5).png"/>
       </Box>
      </Box>
      </Box>


      {/* Office Supplies */}
      <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
      OFFICE SUPPLIES
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Office Supplies").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.images[0].image_url}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.sub_category}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.price}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]}>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1613539266hpbanner-217X467-Office-Chair.gif"/>
       </Box>
      </Box>
      </Box>

      <Image w={["95%"]} mt="30px" src="https://static3.industrybuying.com/homepage/1652437509PowerHouse-Strip-Banner%20(1).png"/>

       {/* Agriculture Garden & Landscaping */}
       <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
      AGRICULTURE GARDEN & LANDSCAPING
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Agriculture Garden & Landscaping").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.images[0].image_url}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.sub_category}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.price}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]} >
        <Image h="100%" src="https://static3.industrybuying.com/homepage/16620097331647327590Agriculture%20and%20garden-min.jpg"/>
       </Box>
      </Box>
      </Box>





       {/* Electrical */}
       <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
        ELECTRICAL
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Electrical").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.images[0].image_url}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.sub_category}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.price}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]}>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1646812681Side%20Banner%20electrical.png"/>
       </Box>
      </Box>
      </Box>







       {/* IT & Electronics */}
      <Box mt="40px"  >
      <Text  as="b"fontSize={["14px","16px","18px"]} >
      IT & ELECTRONICS
      </Text>
      <Box w="95%"  display={"flex"} >
      <SimpleGrid w={["100%","100%","80%"]} columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="IT & Electronics").slice(0, 8).map(item=>(
        
        <Box 
        
        onClick={()=>{navigate(`/product/${item._id}`)}} 
         bg="white"
         key={item._id}
         style={{ cursor: 'pointer' }}
         _hover={{
          boxShadow:'2xl',
          transitionDuration:"100ms",
        }} 
          
         >
        <Box boxSize={["80px","90px","140px"]} ml="25%" mt="15%" >
          <Image h="100%" src={item.images[0].image_url}/>
        </Box>
        <Text textAlign={"center"} fontSize={"15px"}>
          {item.sub_category}
        </Text>
        <Text textAlign={"center"} color={"blue"} fontSize={"15px"}>
        Price: {item.price}
        </Text>
        
        
        </Box>
      ))}
       </SimpleGrid>
       <Box display={["none","none","flex"]}>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1651570414side-bnr-2.png"/>
       </Box>
      </Box>
      </Box>






      </Box>
      


    </Box>
    <Footer/>
    </>
  )
}

export default HomePage
