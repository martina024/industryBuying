import { Box, Button, HStack, Image, Input, Select, Text, useToast, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import UpdateProduct from "../../Components/Admin/UpdateProduct";

import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";


const AdminDashboard = () => {
  const [products, setproducts] = useState([]);

  const token = JSON.parse(localStorage.getItem("adminToken")) || ""
  const GSTIN = JSON.parse(localStorage.getItem("GSTIN")) || ""

  // console.log(token , "token",GSTIN, "Gstin")

  const toast=useToast()
  const [data, setdata] = useState({
    title: "",
    price: "",
    quantity: 0,
    brand: "",
    category: "",
    sub_category:"",
    images:[]
  });
  const handleSubmit=()=>{
  
    if( data.title && data.price && data.brand && data.category && data.sub_category && data.images.length>0){


    console.log(data, "m")

          axios.post(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/post`,data,{
         headers: {
           Authorization:'Bearer'+" "+token,
           gstin: GSTIN
         }
        })
          .then(res=>{
            console.log(res)
            // navigate("/cart")
            
        toast({
          title: "Add the Product",
          description: "Product Added Succesfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });

        Get_All_Cart_Data()
      })
      }
      
      else {
        toast({
          title: "Add Data",
          description: "Please Add All Details",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      }
  }
  const handleChange = (e) => {
    let { name, value } = e.target;
    let val;
    if (e.target.name == "images") {
      val = [{ image_url: value }];
    } 
    else if(name=="price"){
      val = Number(value)
    }
    else {
      val = value;
    }
    setdata({ ...data, [name]: val });
  };
  // console.log(data);
  const Get_All_Cart_Data = async () => {
    // console.log("data")
    let res = await axios.get(
      `https://doubtful-wasp-cowboy-boots.cyclic.app/products`
    );
    setproducts(res.data);
    // console.log(res.data.data.data);
  };
  const handleDelete=(item)=>{
//     const removedata = products.filter((ele) => ele._id !== item._id);
// setproducts(removedata)
  //  console.log(item)
      axios.delete(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/delete/${item}`,{
     headers: {
       Authorization: 'Bearer'+" "+token,
       GSTIN: GSTIN
     }
    })
   
      .then(res=>{
        console.log(res.data)
        
           toast({
            title: "Delete Data",
            description: "Product Delete Succesfully",
            status: "success",
            position: "top",
            duration: 2000,
            isClosable: true,
          });

          Get_All_Cart_Data()
      })
      .catch(err=>console.log(err))

  }


  const updateProducts = (id,price) => {
    console.log(price)

    axios.patch(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/update/${id}`,price,{
      headers: {
        Authorization: 'Bearer'+" "+token
      }
     })
       .then(res=>{
         console.log(res.data)
       })
       .catch(err=>console.log(err))
  }





  const modifyTaskFunc = async (id,price)=>{
    await updateProducts(id,price)
    Get_All_Cart_Data();
  }

  
  useEffect(() => {
    Get_All_Cart_Data();
  }, []);
  return (
    <>
    <Navbar/>

    <Box display={"flex"} mt="90px">
      <Box  w="30%"  m="10px"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" h="380px"p="20px" >
        <Input mb="10px"
          onChange={handleChange}
          name="brand"
          type="text"
          placeholder="Enter Brand"
        />
        <Input  mb="10px"
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Enter Title"
        />
        <Select  mb="10px" onChange={handleChange} name="category">
          <option value="">Select Category</option>
          <option value="Furniture, Hospitality and Food Service">
            Furniture
          </option>
          <option value="Office Supplies">Office Supplies</option>
          <option value="Agriculture Garden & Landscaping">Agriculture</option>
          <option value="Electrical">Electrical</option>
          <option value="IT & Electronics">IT & Electronics</option>
        </Select>

        <Input  mb="10px"
          onChange={handleChange}
          type="url"
          name="sub_category"
          placeholder="Enter Subcategory"
        />
        
        <Input  mb="10px"
          onChange={handleChange}
          type="number"
          name="price"
          placeholder="Enter Price"
        />
        <Input  mb="10px"
          onChange={handleChange}
          type="url"
          name="images"
          placeholder="Enter Url"
        />

        <Button m="auto" onClick={handleSubmit}>ADD</Button>
      </Box>
      <Box w="70%" style={{ height: "500px", overflowY: "scroll" }} m="10px">
        {products.length>0&&products.map((item, index) => (
          <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" p="10px"
            key={item._id}
            display="flex"
            borderLeft={"5px solid black"}
            borderBottom={"5px solid black"}
            m="auto"
          >
            <Box w="30%">
              <Image src={item.images[0].image_url} w="150px" />
            </Box>
            <VStack w="40%">
              <Text>{item.title}</Text>
              <Text>{item.brand}</Text>
              <Text>{item.price}</Text>
            </VStack>
            <HStack gap="15px" w="30%" m="auto">
              <Button onClick={()=>handleDelete(item._id)}>DELETE</Button>
              <UpdateProduct
                id={item._id}
                editFunc={modifyTaskFunc}
                />
            </HStack>
          </Box>
        ))}
      </Box>
    </Box>

    <Footer/>
    </>
  );
}

export default AdminDashboard
