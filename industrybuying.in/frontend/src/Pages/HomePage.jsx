import { Box, Center, Container, Flex, HStack, Image, ListItem, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, SimpleGrid, Text, UnorderedList, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';



const HomePage = () => {
  const API = "https://doubtful-wasp-cowboy-boots.cyclic.app/products"
  

  const [products,setProducts]=useState([])
  const [isVisible,setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 2300;
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


  const links = {color:"gray", cursor:"pointer"};
  const links1 = {color:"#4A90E2", cursor:"pointer"}
  
  
  
  
  return (
    <>
      
    <Navbar />
    <Box bg="gray.100" pb="100px" zIndex={999} pt="90px" display={"flex"} >
    {!isVisible && (
      <Box bg="white" py="40px" position={"fixed"} w="20%" >
      <UnorderedList listStyleType="none"  spacing={5} >
      <Box>
        <Popover trigger="hover">
          {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Center><Text fontSize=".95rem" fontWeight="500" _hover={links}> <Box style={{ cursor: 'pointer' }} _hover={{color:"white" , backgroundColor:"gray.600" }} >Agriculture Garden & Landscape</Box></Text></Center>
            </PopoverTrigger>
            
            <PopoverContent boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" bg="#ffffff" fontWeight="500" maxW="300px" borderRadius="12px">
    
  
            <PopoverBody>
              <Container alignItems="start">
              <Flex>
              <HStack alignItems="start">
                <UnorderedList listStyleType="none"  spacing={1.5} textAlign="left">
                  <ListItem _hover={links1}><Link to="/user/recommendedjobs" onClick={onClose}>Recommended jobs</Link></ListItem>
                  <ListItem onClick={onClose} _hover={links1}>Jobs from recruiters</ListItem>
                  <ListItem onClick={onClose}  _hover={links1}>Jobs from alerts</ListItem>
                  <ListItem onClick={onClose}  _hover={links1}>Application status</ListItem>
                  <ListItem onClick={onClose}  _hover={links1}>Saved jobs</ListItem>
                </UnorderedList>
              </HStack>
              </Flex>
              </Container>
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
      <Box w="80%"  ml="20.5%" >
      <Image w="95%" mt="30px" src="https://static3.industrybuying.com/homepage/1663932735Vacuum-Cleaner.jpg"/>
      {/* FURNITURE, HOSPITALITY AND FOOD SERVICE */}
      <Box mt="40px"  >
      <Text  as="b"fontSize={"18px"} >
        FURNITURE, HOSPITALITY AND FOOD SERVICE
      </Text>
      <Box w="95%" h="500px" display={"flex"} >
      <SimpleGrid w="80%" columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Furniture, Hospitality and Food Service").slice(0, 8).map(item=>(
        
        <Box 
        
        
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
       <Box>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1669293231image%20(5).png"/>
       </Box>
      </Box>
      </Box>


      {/* Office Supplies */}
      <Box mt="40px"  >
      <Text  as="b"fontSize={"18px"} >
      OFFICE SUPPLIES
      </Text>
      <Box w="95%" h="500px" display={"flex"} >
      <SimpleGrid w="80%" columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Office Supplies").slice(0, 8).map(item=>(
        
        <Box 
        
        
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
       <Box>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1613539266hpbanner-217X467-Office-Chair.gif"/>
       </Box>
      </Box>
      </Box>



       {/* Agriculture Garden & Landscaping */}
       <Box mt="40px"  >
      <Text  as="b"fontSize={"18px"} >
      AGRICULTURE GARDEN & LANDSCAPING
      </Text>
      <Box w="95%" h="500px" display={"flex"} >
      <SimpleGrid w="80%" columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Agriculture Garden & Landscaping").slice(0, 8).map(item=>(
        
        <Box 
        
        
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
       <Box>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/16620097331647327590Agriculture%20and%20garden-min.jpg"/>
       </Box>
      </Box>
      </Box>





       {/* Electrical */}
       <Box mt="40px"  >
      <Text  as="b"fontSize={"18px"} >
        ELECTRICAL
      </Text>
      <Box w="95%" h="500px" display={"flex"} >
      <SimpleGrid w="80%" columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="Electrical").slice(0, 8).map(item=>(
        
        <Box 
        
        
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
       <Box>
        <Image h="100%" src="https://static3.industrybuying.com/homepage/1646812681Side%20Banner%20electrical.png"/>
       </Box>
      </Box>
      </Box>







       {/* IT & Electronics */}
       <Box mt="40px"  >
      <Text  as="b"fontSize={"18px"} >
      IT & ELECTRONICS
      </Text>
      <Box w="95%" h="500px" display={"flex"} >
      <SimpleGrid w="80%" columns={[2, 3, 4]} spacing='1px'>
      {products.filter(ele=>ele.category==="IT & Electronics").slice(0, 8).map(item=>(
        
        <Box 
        
        
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
       <Box>
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
