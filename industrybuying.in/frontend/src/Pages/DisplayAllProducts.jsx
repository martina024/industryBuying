import styled from "styled-components";
import FilterSection from "../Components/FilterSection";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";
const DisplayAllProducts = () => {
  return (
    <Wrapper>
    <div className="container grid grid-filter-column">
      <div className="grid-filter-row">
        <FilterSection />
      </div>

      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
  </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.5fr 2fr;
   
    .grid-filter-row{
      padding:2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default DisplayAllProducts
