import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Box,
  Button,
  Input,
  Portal
} from "@chakra-ui/react";

function UpdateProduct(props) {

  const {id,editFunc} = props;

  const initRef = React.useRef();

  const [price, setPrice] = React.useState("")

  const displayFunc = (e) => {
    setPrice(e.target.value);
}



   const handleClick = () => {
      if(price){
        Number(price)
        editFunc(id,price)
          
          console.log(price)
          setPrice("")
      }

    
}

  return (
    <Popover closeOnBlur={false} placement="bottom" initialFocusRef={initRef}>
      {({onClose }) => (
        <>
          <PopoverTrigger>
            <Button colorScheme='teal' variant='solid' size='sm' margin="10px">Modify Task</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader>Enter The New task</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  <Input type="number" placeholder="Enter New Price" value={price} onChange={displayFunc} />
                </Box>
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={() => {onClose(); handleClick()}}
                  ref={initRef}
                >
                  Change
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

export default UpdateProduct;
