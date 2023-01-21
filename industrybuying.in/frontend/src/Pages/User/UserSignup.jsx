
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
import { Navigate } from "react-router-dom";
import {Link} from "react-router-dom"

export default function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setContact] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  // let user = [];
  const toast=useToast()
 
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      gender,
      phoneNumber,
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
    else if(payload.phoneNumber.length !=10){
      toast({
        title: "Error in Contact Details",
        description: "It must be of 10 digits",
        status: "error",
        duration: 4000,
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
      .post("http://localhost:8082/register", payload)
      .then((res) => console.log(res.data));
      
    }
  };

  return (
    <Flex
      minH={"20vh"}
      align={"center"}
      justify={"center"}
      // bgGradient="linear(to-t, green.200, pink.500)"
      bgGradient="radial(gray.100, green.100, pink.200)"
      // bg={useColorModeValue("gray.50", "gray.800")}
      
     
    >
      <Stack spacing={2} mx={"auto"} maxW={"md"} py={12} px={6}  >
        <Stack align={"center"}  >
          <Heading fontSize={"2xl"} textAlign={"center"}>
            Sign up Form
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Get access to our latest products
          </Text>
        </Stack>
        <Box
         
          rounded={"md"}
          bg={useColorModeValue("grey.700", "grey.700")}
          boxShadow={"lg"}
          p={4}
        >
          <Stack spacing={1}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                        size="sm"
                        fontSize={6}
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
                size="sm"
                fontSize={6}
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
                      size="sm"
                      fontSize={6}
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
                  <Input    size="sm" fontSize={6}  type="tel" placeholder="Enter your Contact" value={phoneNumber} onChange={(e)=> setContact(+(e.target.value))}  />
                </FormControl>
              </Box>

            <Select
              fontSize={10}
              ml={-10}
              placeholder="Select Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Prefer not to say</option>
            </Select>
            <Stack fontSize={7} spacing={1} pt={2}>
              <Button
                onClick={handleSubmit}
                size="sm"
                
                bg={"blue.400"}
                colorScheme="teal"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={1}>
              <Text align={"center"} fontSize={10}>
                Already a user? <Link style={{color:"blue"}} to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
