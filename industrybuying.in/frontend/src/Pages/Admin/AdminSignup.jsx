
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  useToast,
  
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
// import { Navigate } from "react-router-dom";
import {Link} from "react-router-dom"

export default function AdminSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setContact] = useState("");
  const [GSTIN ,setGSTIN ]=useState("")
  const [storeName,setstoreName]=useState("")

  const [showPassword, setShowPassword] = useState(false);
  // let user = [];
  const toast=useToast()
 
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      phoneNumber,
      storeName,
      GSTIN,
    };
    if(!payload.name){

      toast({
        title: "Please fill your Name",
        description: "Your name is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 
    }
    else if(!payload.email){

      toast({
        title: "Please fill your Email",
        description: "Your email is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
  
    console.log(payload);
    // console.log(typeof(payload.phoneNumber))
    {

      toast({
      title: "Your account is created",
      description: "We've created your account for you.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    return axios
      .post(" https://doubtful-wasp-cowboy-boots.cyclic.app/admin/register", payload)
      .then((res) => console.log(res.data));
      
    }
  };

  return (
    <Flex
      minH={"20vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
      bgGradient="radial(gray.100, purple.100, pink.200)"
     
    >
      <Stack spacing={2} mx={"auto"} maxW={"lg"} py={12} px={6} width="40%">
        <Stack align={"center"}>
          <Heading fontSize={"2xl"} textAlign={"center"}>
            Admin Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Be a seller with our site
          </Text>
        </Stack>
        <Box
          rounded={"md"}
          bg={useColorModeValue("grey.300", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={1}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    fontSize={14} 
                    width={200}
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                fontSize={14} 
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  fontSize={14} 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Box>
                <FormControl id="contact">
                  <FormLabel>Contact</FormLabel>
                  <Input fontSize={14}   type="tel" placeholder="Enter your Contact" value={phoneNumber} onChange={(e)=> setContact(+(e.target.value))}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="contact">
                  <FormLabel>GSTIN </FormLabel>
                  <Input fontSize={14} type="text" placeholder="GSTIN Number" value={GSTIN } onChange={(e)=> setGSTIN (e.target.value)}  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="contact">
                  <FormLabel>Store Name</FormLabel>
                  <Input fontSize={14}  type="text" placeholder="Store Name" value={storeName} onChange={(e)=> setstoreName(e.target.value)}  />
                </FormControl>
              </Box>
            <Stack fontSize={7} spacing={1} pt={2}>
              <Button
                onClick={handleSubmit}
                size="md"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={3}>
              <Text align={"center"} fontSize={14} >
                Already a user? <Link style={{color:"blue"}} to="/admin/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
