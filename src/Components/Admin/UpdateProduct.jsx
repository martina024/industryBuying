import  FocusLock from "react-focus-lock"
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  FormControl,
  FormLabel,
  Input,
  Stack,
  ButtonGroup,
  Button,
  Box,
  IconButton,
  useDisclosure,
  Text,
  Flex,
} from '@chakra-ui/react'

import { EditIcon } from '@chakra-ui/icons'

// 1. Create a text input component
const UpdateProduct = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  )
})

// 2. Create the form
const Form = ({ firstFieldRef, onCancel }) => {

  const handleClick = () => {
    console.log("amit1")
  }

  return (
    <Stack spacing={2}>
      <UpdateProduct
        label = "Title"
        ref={firstFieldRef}
      />
      <UpdateProduct label='Price' />
      {/* <UpdateProduct label='Category' /> */}
      {/* <UpdateProduct label='Sub Category' /> */}
      <ButtonGroup display='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleClick} colorScheme='teal'>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverForm = ({id}) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  console.log("amit",id)

  return (
    <>
      {/* <Box display='inline-block' p={"8px"} bgColor={"gray.200"} mr={3} fontWeight={"semibold"}>
        Update
      </Box> */}
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Flex gap="5px" _hover={{cursor:"pointer"}}>
            <Text bgColor={"gray.200"} p={"4px 8px"} fontWeight={"semibold"} >Update</Text>
            <IconButton size='sm' icon={<EditIcon fontSize={"24px"} />} />
          </Flex>
                  </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}



export default PopoverForm