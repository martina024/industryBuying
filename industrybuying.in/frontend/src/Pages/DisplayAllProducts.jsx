import React from 'react'
import styled from 'styled-components'
import FilterSection from '../Components/FilterSection'
import ProductList from '../Components/ProductList'
const DisplayAllProducts = () => {
  return (
    <div>
      <Wrapper color="green">
        <WrapperFilterSort>
      <FilterSection />
      </WrapperFilterSort>
      <WrapperprodcutAlbums>
      <ProductList />
      </WrapperprodcutAlbums>
    </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
border: ${({color})=> `1px solid ${color}`};
display:flex;
min-height:70vh;
`
const WrapperFilterSort = styled.div`
width:300px;
padding:50px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const WrapperprodcutAlbums = styled.div`
width:100%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
justify-content:center;
grid-gap:10px;
margin:0;
padding:0;

`

export default DisplayAllProducts
