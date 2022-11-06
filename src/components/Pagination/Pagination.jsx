import ReactPaginate from 'react-paginate';
import './Pagination.css';

function PaginatedItems ({ totalPages, setPage, currentPage }) {
  const handlePageClick = event => {
    setPage({ page: event.selected + 1 });
  };

  return (
    <>
        <ReactPaginate
            pageCount={totalPages}
            forcePage={currentPage} 
            onPageChange={handlePageClick}
            nextLabel="Next>"
            previousLabel="<Previous" 
            breakLabel="..."
            pageRangeDisplayed={2}
            marginPagesDisplayed={4}
            containerClassName="pagination" 
            activeClassName="active"
            breakClassName="item"
            breakLinkClassName="link"
            pageClassName="item"
            pageLinkClassName="link"
            previousClassName="item"
            previousLinkClassName="link"
            nextClassName="item"
            nextLinkClassName="link"
            renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;