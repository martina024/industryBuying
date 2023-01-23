
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
import {Link, useNavigate} from "react-router-dom"
import Footer from "../../Components/Footer";

export default function UserSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setContact] = useState("");
  let navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  // let user = [];
  const toast=useToast()
 
  const handleSubmit = () => {
    const payload = {
      name,
      email,
      password,
      gender,
      phoneNumber:Number(phoneNumber)
    };
    if(!payload.name){

      toast({
        position:"top",
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
        position:"top",
        title: "Please fill your Email",
        description: "Your email is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
    else if(!payload.password){

      toast({
        position:"top",
        title: "Please fill your Password",
        description: "Your password is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
    
    console.log(payload);
    // console.log(typeof(payload.phoneNumber))
    {
    console.log(payload)
    axios.post("https://doubtful-wasp-cowboy-boots.cyclic.app/register",payload)
      .then((res) =>{
        toast({
          position:"top",
          title: `${res.data.message}`,
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        setTimeout (() => {
          navigate("/login")
        },3000)
      }
       )
      
    }
  };

  return (
    <>
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgGradient="radial(gray.100, green.100, pink.200)"
      
      
     
    >
      <Stack spacing={2} mx={"auto"} maxW={"md"} py={12} px={6} width="40%" >
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
                        size="md"
                        fontSize={15}
                        width={373}
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
                size="md"
                fontSize={15}
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
                      size="md"
                      fontSize={15}
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
                <FormControl id="contact" isRequired>
                  <FormLabel>Contact</FormLabel>
                  <Input size="md" fontSize={15}  type="number" placeholder="Enter your Contact" value={phoneNumber} onChange={(e)=> setContact((e.target.value))}  />
                </FormControl>
              </Box>

              <FormControl isRequired >
              <FormLabel>Gender</FormLabel>
            <Select
              mb="15px"
             fontSize={15}
              placeholder="Select Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Prefer not to say</option>
            </Select>

            </FormControl>

            <Button onClick={handleSubmit} size="md" bg={"blue.400"} colorScheme="teal" _hover={{bg: "blue.500",}} type="submit">Sign up</Button>

            <Stack pt={1}>
              <Text align={"center"} fontSize={14}>
                Already a user? <Link style={{color:"blue"}} to="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

    <Footer/>
    </>
  );
}
