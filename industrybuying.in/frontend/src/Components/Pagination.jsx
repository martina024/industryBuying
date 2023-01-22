import { Button } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({page,setPage}) => {

    const handlePage=(value)=>
    {
        setPage(page+value)
    }
    
    
    
  return (
    <>
    <br />
    <Button size={['xs','sm','sm']} mr={2} disabled={page===1 } onClick={()=>handlePage(-1)}>Prev</Button>
    <Button size={['xs','sm','sm']}>{page}</Button>
    <Button size={['xs','sm','sm']} ml={2} disabled={page===10} onClick={()=>handlePage(1)}>Next</Button>
    <br />
    </>
  )
}

export default Pagination