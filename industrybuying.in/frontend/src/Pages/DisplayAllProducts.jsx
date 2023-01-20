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
      <WrapperMusicAlbums>
      <ProductList />
      </WrapperMusicAlbums>
    </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
border: ${({color})=> `1px solid ${color}`};
display:flex;
min-height:100vh;
`
const WrapperFilterSort = styled.div`
width:200px;
border:1px solid red;
`
const WrapperMusicAlbums = styled.div`
border: 1px solid blue;
width:100%;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
justify-content:center;
grid-gap:10px;

`

export default DisplayAllProducts
