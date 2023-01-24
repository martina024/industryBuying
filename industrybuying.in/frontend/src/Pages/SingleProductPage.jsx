import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
  Spinner
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/productpage.css";
import { useParams,useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import { SiMastercard, SiVisa } from "react-icons/si";
import { BsShieldFillCheck } from "react-icons/bs";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";



const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount]=useState(1);
  const navigate=useNavigate()
  const {images} = data;

  const token = JSON.parse(localStorage.getItem("token")) || ""

  const getData = () => {
    setLoading(true);
    axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/${id}`)
    // return axios.get(`http://localhost:4500/products?page=${page}&limit=16&sortby=price&order=${sortby}&search=${search}`)

      .then((res) => {
        // console.log(res.data);
        setData(res.data)
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    getData(id)
  }, [id]);

const handleQuantity=(id)=>
{
  const payload={
  quantity:count 
}

  axios.patch(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/quantity/${id}`,payload,{
 headers: {
   Authorization: 'Bearer'+" "+token //the token is a variable which holds the token
 }
})
  .then(res=>{
    console.log(res.data)
    navigate("/cart")
  })
  .catch(err=>console.log(err))

}


  if (loading) {
    return (
      <>
      {/* <Navbar/> */}
      <Box mt="40px">
        <Center>
          <Spinner/>
        </Center>
      </Box>
      {/* <Footers/> */}
      </>
    );
  }
  if (error) {
    return (
      <>
      {/* <Navbar/> */}
      <Box>
        <Center>
        <Image h='100vh' w='100wh' src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000" alt='error image'/>
        </Center>
      </Box>
      {/* <Footers/> */}
      </>
    );
  }




  return (
    <>
    <Navbar/>
    <Box mt={"18px"} b="1px solid red">
      <br />
      {/* Top head line */}
      <Box p={3} fontSize={["xs", "xs", "xs"]} h="auto" bgColor="gray.50">
        <Flex
          w="80%"
          margin="auto"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box>
            <Link to="/">
            <Text color="gray" textAlign="left" alignItems='center'>
              Home <ChevronRightIcon /> {`${data?.category}`} <ChevronRightIcon /> {`${data?.sub_category}`} <ChevronRightIcon />{data.brand}
            </Text>
            </Link>
          </Box>
          <Box mr={3}>
            <Flex alignItems="center">
              <Box>
                <Flex alignItems="center">
                  <Box mr={1}>
                    <i className="bx bx-envelope"></i>{" "}
                  </Box>
                  <Box>Contact Now</Box>
                </Flex>
              </Box>
              <Box ml={3}>
                <Flex alignItems="center">
                  <Box mr={1} color="gray">
                    <i className="bx bx-heart"></i>
                  </Box>
                  Favourite
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {/* Image and Description */}
      <Box m="auto" w="80%">
        <SimpleGrid columns={[1, 1, 2]}>
          {/* Image  */}
          <Box w={["100%", "100%", "100%", "100%"]}>
            <Flex flexWrap="wrap" justifyContent="center" mt={7}>
             {
                images?.map((elem,index) => {
                  if(index==0){
                    return (<Box key={index}><Image minW="290px" maxW="290px" src={elem.image_url} /></Box>)
                  }
                  return;
                })
             }

            </Flex>
          </Box>

          {/* Description */}
          <Box w={["100%"]}>
            <Box w="90%" m="auto">
              <Box w="90%" mt={6}>
                <Text textAlign="left" fontSize="lg" fontWeight="bold">
                 {data?.title}
                </Text>
              </Box>
              <br />

              <Box>
                <Text color="gray" textAlign="left">
                 Brand: {data?.brand}
                </Text>
              </Box>
              <br />
              <Box bg="gray.50">
                <Text color="gray" p="20px 10px" textAlign="left">
                  Price : {data?.price} 
                </Text>
              </Box>
              

              <Box mt="5" fontSize={["sm", "sm", "lg"]}>
                <Flex alignItems='center'>
                  <Box  w='fit-content'>Quantity :</Box>
                  <Box
                    ml="2rem"
                    // p="5px 20px"
                  >
                    <Center>
                      <Button bgColor='gray.300' mr='1' size='sm'  onClick={()=>setCount(count-1)} isDisabled={count===0}>-</Button>
                      <Button bgColor='gray.300' mr='1' size='sm' disabled>{count}</Button>
                      <Button bgColor='gray.300'  size='sm' onClick={()=>setCount(count+1)} disabled={count===5}>+</Button>
                    </Center>
                  </Box>
                </Flex>
              </Box>
              <br />
              <br />

              <Box>
                <Button mr={2}>
                  <Flex alignItems="center">
                    <Box fontSize={['lg','lg','lg']} cursor="pointer">
                      <i className="bx bx-heart"></i>
                    </Box>
                    <Box ml="5px">Favourite</Box>
                  </Flex>
                </Button>
                <Button onClick={()=>handleQuantity(data._id)}>
                  <Flex alignItems="center">
                    <Box fontSize={['lg','lg','lg']} cursor="pointer">
                    <i className='bx bx-cart-alt'></i>
                    </Box>
                    <Box ml="5px" >Add to Cart</Box>
                  </Flex>
                </Button>
              </Box>

              <br />

              <Box h="max-content" fontSize={["sm", "sm", "sm"]}>
                <SimpleGrid columns={[1, 1, 3, 6]}>
                 
                  <Box> <Center><SiVisa fontSize={"36px"} /></Center> </Box>

                  <Box> <Center><SiMastercard fontSize={"32px"} /></Center> </Box>

                 
                  <Box ml="38px" mt="6px">
                    <Center>
                    <Flex minW="100px" gap="5px">
                      <Box>
                        <BsShieldFillCheck fontSize={"18px"} />
                      </Box>
                      <Box>Tax Info</Box>
                    </Flex>
                    </Center>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Description */}

      <br />
      <hr />

      <br />
      <Box>
        <Box w="90%" m="auto" bgColor="gray.50" borderBottom="2px solid orange">
          <Box w="fit-content" p={3} bgColor="yellow">
            <Text fontSize="xl" fontWeight="600">
              Description
            </Text>
          </Box>
        </Box>
        <br />

        <br />
        <Box textAlign="left" w="80%" m="auto">
          <Text fontSize="xl" fontWeight="600">
            Main Feature
          </Text>
          <hr />

          <br />

          <Box>
            <Text>{data.brand}</Text>
          </Box>

          <br />
          <br />
          <Box ml={5}>
            <ol>
              <li>Type of Product: {`${data?.sub_category}`}</li>
              <li>Screen Size: 14 inch</li>
              <li>Operating System: Windows 10 Pro</li>
              <li>BT 4.0 5.0 support bluetooth call</li>
              <li>Appearance material:Zinc alloy</li>
              <li>Resolution: 1920 x 1080 Pixels</li>
              <li>Appearance material:Zinc alloy</li>
              <li>Operating System Type: 64 bit</li>
              <li>Hard Disk Size: 256 GB SSD</li>
              <li>Is Consumable: NO</li>
            </ol>
          </Box>

          <br />
          <br />

          <Box>
            <Text>Key Features :</Text>
            <br />
            <Text>
            Intel Core i5 - 8th Gen Processor (1.6GHz) with 8GB of DDR4 memory 
            256GB SSD storage and Windows 10 Pro operating system. 
            </Text>
            <br />
            <Text>
            The USB Type-C ensures ultrafast 4K displays and simultaneous data transmission and charging 
            The 1920x1080 Full HD 14" IPS display allows for color adjustment with greater accuracy.
            </Text>

            <br />
            <br />
            <Text>More Details :</Text>

            <br />
            <Text>
            The LG gram 14 Z980-G.AP52A2 laptop is ultra-portable, 
            featuring a compact footprint, 35.56 cm (14) 14" display, an all-aluminum body,
             and a featherweight 995g design. The 8th Gen Intel Core processor delivers exceptional 
             performance across single and multi-threaded applications alike so you can finish your work
             faster without having to compromise on quality.Dual SSD storage offers lightning fast read/write SSD speeds and allows for
              easy transfer of files between devices, with one SSD already available as standard. Every inch of the LG gram has been 
              crafted to give you the best experience in a sleek and professional style. 
            </Text>

            <br />
            <br />
            <Text>Support Bluetooth call：</Text>
            <br />
            <Text>
              Mobile phone synchronization of frequently used contacts.
            </Text>
            <br />
            <Text>So you can just use the Laptop to answer your calls.</Text>

            <br />

            <br />
            <Text fontWeight="700">Specifications</Text>
            <br />

            <TableContainer width="max-content">
              <Table size={["sm", "sm", "sm"]}>
                <Tbody>
                  <Tr>
                    <Td>Battery Capacity</Td>
                    <Td>2300MAH</Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Type</Td>
                    <Td>LED</Td>
                  </Tr>
                  <Tr>
                    <Td>Charging Time</Td>
                    <Td>2 - 3 Hours</Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Size</Td>
                    <Td>14 Inches</Td>
                  </Tr>
                  <Tr>
                    <Td>Operating system type</Td>
                    <Td>64 bit</Td>
                  </Tr>
                  <Tr>
                    <Td>Ram Type:</Td>
                    <Td>DDR4</Td>
                  </Tr>
                  <Tr>
                    <Td>USB Ports:</Td>
                    <Td>2 x USB 3.0, 1 x USB 3.0 Type</Td>
                  </Tr>
                  <Tr>
                    <Td>Screen Resolution</Td>
                    <Td>1920 x 1080 Pixels</Td>
                  </Tr>
                  <Tr>
                    <Td>Keyboard</Td>
                    <Td>Back-lit Keyboard</Td>
                  </Tr>
                  <Tr>
                    <Td>Bluetooth distance</Td>
                    <Td>W/O obstacles 10m - 15m</Td>
                  </Tr>
                  <Tr>
                    <Td>Battery Life</Td>
                    <Td>21.5 Hours</Td>
                  </Tr>
                  <Tr>
                    <Td>Wireless LAN</Td>
                    <Td>802.11ac</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>

            <br />
            <br />

            <Box>
              <Box>
                {
                  images?.map((elem,index) => (
                    <Box key={index}>
                      <Center><Image minW="200px" mb="32px" maxW="200px" src={`${elem.image_url}`} /></Center>
                    </Box>
                  ))
                }
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <br />

      <Box w="90%" m="auto">
        <Box>
          <Text textAlign="left " fontSize="2xl" fontWeight="bold">
            Customer Reviews
          </Text>
          <br />

          <hr />
          <br />
          <Box>
            <Flex justifyContent="space-between">
              <Box fontSize="2xl" color="green" fontWeight="bold">
                <Text textAlign="left">4</Text>
                <Flex>
                  <StarIcon color={"yellow.500"} />
                  <StarIcon color={"yellow.500"} />
                  <StarIcon color={"yellow.500"} />
                  <StarIcon color={"yellow.500"} />
                  <StarIcon color={"gray.200"}/>
                </Flex>
              </Box>
              <Box>
                <Center>
                  <Text
                    border="1px solid black"
                    cursor="pointer"
                    bgColor="yellow.400"
                    fontWeight="bold"
                    borderRadius="5px"
                    p={3}
                  >
                    Write a Review
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>

          <br />
          <br />
          <hr />
          <br />
          <br />
        </Box>
      </Box>
    </Box>
   <Footer/>
    </>
  );
};

export default SingleProduct;
