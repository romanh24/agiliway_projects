import {
  Pagination as PaginationStrap,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

const Pagination = ({
  booksPerPage,
  totalBooks,
  paginate,
  nextPage,
  previousPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <div>
      <PaginationStrap size="sm">
        <PaginationItem>
          <PaginationLink href="#" previous onClick={previousPage} />
        </PaginationItem>
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

        <PaginationItem>
          <PaginationLink href="#" next onClick={nextPage} />
        </PaginationItem>
      </PaginationStrap>
    </div>
  );
};

export default Pagination;
