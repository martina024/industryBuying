import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import {Link, Navigate} from "react-router-dom"

const Login = () => {

  const toast = useToast()
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const [email, setEmail] = React.useState("eve.holt@reqres.in");
  const [password, setPassword] = React.useState("");
  const [value, setValue] = React.useState(false)
  const handleSubmit = () => {
    let box = localStorage.getItem("token")
    console.log(box)
    const payload = {

      email,
      password,

    };

    if (!payload.email) {

      toast({
        title: "Please fill your Email",
        description: "Your email is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
     
    }
    else if (!payload.password) {

      toast({
        title: "Please fill your Password",
        description: "Your password is missing",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    
    }

    // console.log(payload);
else{

   
      axios.post("https://doubtful-wasp-cowboy-boots.cyclic.app/admin/login", payload)
      .then(res=>{
        localStorage.setItem("token",JSON.stringify(res.data.token))
        console.log(res.data.token);
        if(res.data.token){
          <Link to="/"></Link>
          toast({
            title: "Your are successfully logged in",
            description: "Taking you to Admin Dashboard",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
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
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>Admin Log In</Heading>
        <Input
          placeholder="Enter your email"
          type="email"
          variant="filled"
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
        <Button colorScheme="teal" mb={8} onClick={handleSubmit} >
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
  );
};

export default Login;
