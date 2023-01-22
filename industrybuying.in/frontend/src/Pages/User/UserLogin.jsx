

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useColorModeValue,
  useColorMode,
  Switch,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import image from '../User/logo.jpg'
import {Link, Navigate, useNavigate} from "react-router-dom"
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
export default function UserLogin() {
  const navigate=useNavigate()
  const toast=useToast()
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  let flag=false
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const payload = {
      
      email,
      password,
      
    };

    if(!payload.email){

      toast({
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
        title: "Please fill your Password",
        description: "Your password is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return
    }
    
    console.log(payload);
    //if successfull
    {

    //   toast({
    //   title: "Your are successfully logged in",
    //   status: "success",
    //   duration: 4000,
    //   isClosable: true,
    // });
     axios.post("https://doubtful-wasp-cowboy-boots.cyclic.app/login", payload)
      .then(res=>{
       flag=true;
        localStorage.setItem("token",JSON.stringify(res.data.token))
        console.log(res.data);
        if(res.data.token){
        
          toast({
            title: "Your are successfully logged in",
            description: "Taking you to homepage",
            status: "success",
            duration: 4000,
            isClosable: true,
          })
          return <Navigate to ="/" />
        }
        else{
          toast({
            title: "Invalid email/password",
            description: "Please write correct email / password",
            status: "error",
            duration: 4000,
            isClosable: true,
          });

        }
      })
      .catch(err=>console.log(err));
      
    }
  };
  return (

    <>
   <Navbar/>

    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
   
        <Flex h="100vh" alignItems="center" justifyContent="center" w="60%">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>User Log In</Heading>
        <Input
          placeholder="Enter your email"
          type="email"
          // variant="filled"
          mb={3}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" mb={8}  onClick={handleSubmit}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
      <Flex flex={1}>
        <Image h="90vh"
          alt={'Login Image'}
          objectFit={'cover'}
          src={image}
        />
      </Flex>
    </Stack>

    <Footer/>

    </>
  );
}