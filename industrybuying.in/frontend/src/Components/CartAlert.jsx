import { Alert,AlertIcon } from "@chakra-ui/react";
import React from "react";

const CartAlert = () => {
  return (
    <>
      <Alert w="50%" status='success'>
        <AlertIcon />
        Data uploaded to the server
      </Alert>
    </>
  );
};

export default CartAlert;