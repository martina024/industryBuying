import React from 'react'

const AdminDashboard = () => {
  const [products, setproducts] = useState([]);
  const toast=useToast()
  const [data, setdata] = useState({
    price: 0,
    brand: "",
    category: "",
    title: "",
    images: [],
  });

  const handleSubmit=()=>{
    if( data.price>0&&
      data.brand!==""&&
      data.category!==""&&
      data.title!==""&&data.images!==[]){
// axios.post(`https://doubtful-wasp-cowboy-boots.cyclic.app/products`,data,{ 
// headers:{
//   Authorization:localStorage.getItem("token"),
//      gstIN:item.GST
// },
//  }).then((res)=>{
        toast({
          title: "Add Data",
          description: "Product Added Succesfully",
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      // })
        setdata({
          price: 0,
          brand: "",
          category: "",
          title: "",
          images: [],})
      }else {
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
    } else {
      val = value;
    }
    setdata({ ...data, [name]: val });
  };
  console.log(data);
  const Get_All_Cart_Data = async () => {
    // console.log("data")
    let res = await axios.get(
      `https://doubtful-wasp-cowboy-boots.cyclic.app/products`
    );
    setproducts(res.data);
    // console.log(res.data.data.data);
  };
  const handleDelete=(item)=>{
//     console.log(item)
//   axios.delete(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/delete/${}`,{
 
// headers:{
//   Authorization:localStorage.getItem("token"),
    //  gstIN:item.GST
// },
//  }).then((res)=>{
//    toast({
//     title: "Delete Data",
//     description: "Product Delete Succesfully",
//     status: "success",
//     position: "top",
//     duration: 2000,
//     isClosable: true,
//   });
//    })
  }
  const handleUpdate=()=>{}
  useEffect(() => {
    Get_All_Cart_Data();
  }, []);
  return (
    <Box display={"flex"} >
      <Box  w="30%"  m="10px"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" h="350px"p="20px" >
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
            <VStack w="30%" m="auto">
              {" "}
              <Button onClick={()=>handleDelete(item)}>DELETE</Button>
              <Button onClick={()=>handleUpdate(item)}>UPDATE</Button>
            </VStack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default AdminDashboard
