import {
  Pagination as PaginationStrap,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "./Pagination.scss";

const Pagination = ({
  booksPerPage,
  totalBooks,
  paginate,
  nextPage,
  previousPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <PaginationStrap size="sm">
        {currentPage > 1 && pageNumbers.length && (
          <PaginationItem>
            <PaginationLink href="#" previous onClick={previousPage} />
          </PaginationItem>
        )}

        {pageNumbers.map((number) => {
          return (
            <PaginationItem key={number}>
              <PaginationLink
                key={number}
                href="#"
                onClick={() => paginate(number)}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage < pageNumbers.length && (
          <PaginationItem>
            <PaginationLink href="#" next onClick={nextPage} />
          </PaginationItem>
        )}
      </PaginationStrap>
    </div>
  );
};

export default Pagination;
