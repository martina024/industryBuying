import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
    const handleClick = () => {
      console.log("click")
    }
    const [pageCount, setpageCount] = useState(0);
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination
