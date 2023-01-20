import { Box, Text, Button, Spacer } from '@chakra-ui/react'
import { ChevronLeftIcon, AddIcon, ArrowLeftIcon, ChevronRightIcon, ArrowRightIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from "react";

export default function Pagination({ setPage, page }) {

  return (
    <>
      {/* box */}
      <Box w="full" p="5" display={"flex"} >

<Spacer />

        {/* prev page button */}
        <Button leftIcon={<ChevronLeftIcon />} m="1" bg="#ff6347" color="white" disabled={page == 1} onClick={() => setPage(page - 1)}
        _hover={{color:"#ff6347", background:"white", border:"2px"}}
        >
          Prev
        </Button>

        {/* next page button */}
        <Button rightIcon={<ChevronRightIcon />} m="1" bg="#ff6347" color="white" disabled={page == 5} onClick={() => setPage(page + 1)}
        _hover={{color:"#ff6347", background:"white", border:"2px"}} >
          Next
        </Button>
      </Box>
    </>
  )
}