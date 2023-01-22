import {
  Box,
  Center,
  Flex,
  GridItem,
  Image,
  Select,
  SimpleGrid,
  Text,
  SkeletonCircle,
  SkeletonText,
  Input,
} from "@chakra-ui/react";
import {  Button } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";
import "../styles/productpage.css";
import axios from "axios";
import {
  getDataFailure,
  getDataRequest,
  getDataSuccess,
} from "../Redux/AppReducer/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


const Productspage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [sortby, setSortby] = useState("");
  const [searching , setSearch] =useState("");
  const [flag,setFlag] = useState(false)

  const { data,  isLoading, isError } = useSelector((state) => {
    return {
      data: state.AppReducer.data,
      isLoading: state.AppReducer.isLoading,
      isError: state.AppReducer.isError,
    };
  }, shallowEqual);

  localStorage.setItem("token", JSON.stringify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklEIjoiNjNjY2U3OTQyZWIxMzcwNTExNjBkOWFlIiwiaWF0IjoxNjc0MzczMDIwfQ.0EX_bCtlzNzf9hIKSR0dCrh3u1g-Fvx7DWc5AfNj8ng"))

  const token = JSON.parse(localStorage.getItem("token")) || ""


  const handleSearch = () => {

    if(searching){

      dispatch(getDataRequest());
  
      return axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&sortby=price&order=${sortby}&search=${searching}`)
      // return axios.get(`http://localhost:4500/products?page=${page}&limit=16&sortby=price&order=${sortby}&search=${search}`)
      // page=${page}&limit=16&sortby=price&order=${sortby}&search=${search}
        .then((res) => {
          console.log(res.data,"searched");
          dispatch(getDataSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getDataFailure());
        });
    }
      
  }

  const getData = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&sortby=price&order=${sortby}&search=${searching}`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  };


  useEffect(() => {
    getData()
  }, [ sortby, page]);



  const handleQuantity=(id)=>
{
  let payload={
    quantity:1
  }
  console.log(payload)

  axios.patch(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/quantity/${id}`,payload,{
    headers: {
      Authorization: 'Bearer'+" "+token
    }
   })
     .then(res=>{
      setFlag(true)
       console.log(res.data)
       // navigate("/cart")
     })
     .catch(err=>console.log(err))
}





const handleAgriPro = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=AgriPro`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  
}




const handleKatyani = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=Katyayani`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  
}



const handleLenovo = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=Lenovo`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  
}


const handlePTron = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=pTron`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  
}


const handleAquaguard = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=Aquaguard`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  
}


const handleIBBasics = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"IB Basics"}`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  
}


const handleHavells = () => {

    dispatch(getDataRequest());
     axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=Havells`)
      .then((res) => {
        console.log(res.data);
        dispatch(getDataSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDataFailure());
      });
  
}



const handleAgriculture = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"Agriculture Garden & Landscaping"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handleOffice = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"Office Supplies"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handleElectrical = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"Electrical"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handleElectronics = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"IT & Electronics"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}

const handleFurniture = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"Furniture, Hospitality and Food Service"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}

const handleLaptops = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"Laptop"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handleAccessories = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"Accessories"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handlePurifiers = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?page=${page}&limit=16&search=${"Purifier"}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}



const handlePrice1 = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?filterby=price&lt=1999`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handlePrice2 = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?filterby=price&lt=4999`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handlePrice3 = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?filterby=price&lt=9999`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handlePrice4 = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?filterby=price&lt=39999`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handlePrice5 = () => {

  dispatch(getDataRequest());
   axios.get(`https://doubtful-wasp-cowboy-boots.cyclic.app/products?filterby=price&lt=59999`)
    .then((res) => {
      console.log(res.data);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });

}


const handlePrice6 = () => {
  getData()
}






  if (isError) {
    return (
      <Box mt="100px">
        <Center>
          <Image
            h="100vh"
            w="100wh"
            src="https://img.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg?w=2000"
            alt="error image"
          />
        </Center>
      </Box>
    );
  } else {
    return (
      <>
      <Box w="98%" m="auto" mt="15]px">
        <Box h="50px" bg="white" width={"100%"}></Box>

        <br />
        <Flex justifyContent="space-between" lineHeight="25px">
          <Box
            p={2}
            width={["40%", "25%", "20%", "20%"]}
            h="100vh"
            className="product-left-container"
            overflow="scroll"
            overflowX="hidden"
            fontSize={["xs", "sm", "lg"]}
          >
            <Flex fontSize="l" alignItems="center" w="fit-content">
              <AiOutlineLeft />
              <Link to="/">
                <Text cursor="pointer">Back</Text>
              </Link>
            </Flex>

            <Text
              textAlign="left"
              mt={3}
              fontSize={["xs", "sm", "lg"]}
              fontWeight="700"
            >
              Hot Search
            </Text>

            <br />
            <hr />

            <Text
              textAlign="left"
              fontWeight="700"
              fontSize={["xs", "sm", "lg"]}
            >
              NARROW SEARCH RESULTS
            </Text>
            <Box textAlign="left" fontSize="13px">
              <Text className="section-left-hover-bold"> IN STOCK</Text>
              <Text className="section-left-hover-bold">ON SALE</Text>
            </Box>

            <Text
              textAlign="left"
              fontWeight="700"
              fontSize={["xs", "sm", "lg"]}
            >
              Categories
            </Text>
            <Box textAlign="left" fontSize={["xs", "xs", "sm"]}>
              <Text className="section-left-hover-bold" onClick={handleAgriculture}>Agriculture Garden & Landscaping</Text>
              <Text className="section-left-hover-bold" onClick={handleOffice}>Office Supplies</Text>
              <Text className="section-left-hover-bold" onClick={handleElectrical}>Electrical</Text>
              <Text className="section-left-hover-bold" onClick={handleElectronics}>IT & Electronics</Text>
              <Text className="section-left-hover-bold" onClick={handleFurniture}>Furniture, Hospitality and Food Service</Text>
              <Text className="section-left-hover-bold" onClick={handleLaptops}>Laptops</Text>
              <Text className="section-left-hover-bold" onClick={handleAccessories}>Accessories</Text>
              <Text className="section-left-hover-bold" onClick={handlePurifiers}>Purifiers</Text>
            </Box>
          </Box>

          {/* Right Top Section */}
          <Box
            width="75%"
            h="300vh"
            className="product-main-container"
            overflow="scroll"
          >

              <Flex w="40%" m={["auto","auto", "auto", "0px 12rem"]}> 
                <Input placeholder="Search" value={searching} onChange={(e) => setSearch(e.target.value)} />
                <Text p={"4px 12px"}><Button onClick={handleSearch}>Search</Button></Text>
                </Flex>
           

            {/* Section 3 Brand */}
            <Box h="auto" className="product-brand">
              <Flex alignItems="center" ml="1rem" mt="2rem">
                <Box>
                  <Text w="fit-content">Brand: </Text>
                </Box>
                <Box p={1}>
                  <SimpleGrid
                    columns={[2, 4, 6, 8]}
                    gap={2}
                    alignItems="center"
                    justifyContent="space-evenly"
                    flexWrap="wrap"
                  >
                    <Box w="6rem" h="2rem" className="section-price-filter">
                      <Text fontWeight={"semibold"} onClick={handleAgriPro}>AgriPro</Text>
                    </Box>
                    <Box w="6rem" h="2rem" className="section-price-filter">
                    <Text fontWeight={"semibold"} onClick={handleKatyani}>Katyayani</Text>
                    </Box>
                    <Box w="6rem" h="2rem" className="section-price-filter">
                    <Text fontWeight={"semibold"} onClick={handleLenovo}>Lenovo</Text>
                    </Box>

                    <Box alignItems="center" w="6rem" h="2rem" className="section-price-filter">
                       <Text fontWeight={"semibold"} onClick={handlePTron}>pTron</Text>
                    </Box>

                    <Box alignItems="center" w="6rem" h="2rem" className="section-price-filter">
                       <Text fontWeight={"semibold"} onClick={handleAquaguard}>Aquaguard</Text>
                    </Box>
                   
                    <Box alignItems="center" w="6rem" h="2rem" className="section-price-filter">
                       <Text fontWeight={"semibold"} onClick={handleIBBasics}>IB BASICS</Text>
                    </Box>

                    <Box alignItems="center" w="6rem" h="2rem" className="section-price-filter">
                       <Text fontWeight={"semibold"} onClick={handleHavells}>Havells</Text>
                    </Box>

                   
                  </SimpleGrid>
                </Box>
              </Flex>
            </Box>

            {/* Section 4 Price filter */}

            <Box fontSize="xs" h="auto" mt={2} ml={3}>
              <Flex alignItems="center" mt="1rem">
                <Box w="fit-content">
                  <Text>Price: </Text>
                </Box>
                <Box p={1}>
                  <SimpleGrid
                    columns={[3, 4, 6, 8]}
                    gap={2}
                    alignItems="center"
                    justifyContent="space-evenly"
                    flexWrap="wrap"
                  >
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text onClick={handlePrice1}>Rs 1999</Text>
                    </Box>
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text onClick={handlePrice2}>Rs 4999</Text>
                    </Box>
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text onClick={handlePrice3 }>Rs 9999</Text>
                    </Box>

                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text onClick={handlePrice4}>Rs 39999</Text>
                    </Box>

                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text onClick={handlePrice5} >Rs 59999</Text>
                    </Box>
                    <Box
                      className="section-price-filter"
                      pl="1"
                      pr="1"
                      h="fit-content"
                    >
                      <Text onClick={handlePrice6}>All</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Flex>
            </Box>

            {/* section 5 Sort by categories */}
            <Box fontSize="xs" h="auto" mt={2} ml={3}>
              <Box>
                <Select
                  w="fit-content"
                  borderColor="gray.300"
                  onChange={(e) => setSortby(e.target.value)}
                  size={["xs", "sm", "sm"]}
                >
                  <option value=" ">Select Price Oder</option>
                  <option value="asc">low to high</option>
                  <option value="desc">high to low</option>
                </Select>
              </Box>
            </Box>
            <br />
            <hr />

            {/* Main Container */}

            <Box m="auto" mt="2rem" w="95%">
              <Box>
                <SimpleGrid columns={[1, 2, 3 ,4]} gap={4}>
                  { data.length > 0 &&
                    data?.map((item) => {
                      return isLoading ? (
                        <>
                          <Box  padding="3" boxShadow="lg" bg="gray.50">
                            <SkeletonCircle m='auto' size="20" />
                            <SkeletonText
                              mt="4"
                              noOfLines={6}
                              spacing="4"
                              skeletonHeight="5"
                            />
                          </Box>
                        </>
                      ) : (
                        <GridItem className="product-container" key={item._id}>
                          <Box lineHeight="20px" textAlign="left" p={2}>
                            <Link to={`/product/${item._id}`}>
                              <Center>
                              <Image
                               minH="250px"
                               maxH={"250px"}
                               src={item.images[0].image_url}
                                alt={item.brand}
                                cursor="pointer"
                              />
                              </Center>
                              
                            </Link>
                            <Text
                              fontSize={["xs", "sm", "sm", "sm"]}
                              className="product-container-title"
                            >
                              {item.title}
                            </Text>

                            <Text mt=".2rem" fontSize={".8rem"}>
                              by {item.brand}
                            </Text>
                            <Text mt="1rem" color="red" fontWeight="bold">
                              Rs. {item.price}
                            </Text>
                           
                            <Box fontSize="xl" textAlign="right" mt={3}>
                              <Flex
                                color="gray.400"
                                justifyContent="space-between"
                                alignItems="center"
                              >
                                <Link to={`/product/${item._id}`}>
                                  <Button>More Details</Button>
                                </Link>
                                <Button
                                  onClick={() => handleQuantity(item._id)}
                                >
                                  <i className="bx bx-cart-alt"></i>Cart
                                </Button>
                              </Flex>
                            </Box>
                          </Box>
                        </GridItem>
                      );
                    })}
                </SimpleGrid>
                <Pagination page={page} setPage={setPage} />
                <br />
                <hr />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
     
      </>
    );
  }
};

export default Productspage;
