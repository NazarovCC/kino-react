import React from 'react';
import { getPageArray } from '../../../utils/pages';

const Paginaton = ({
  currentPage,
  totalPage,
  changePage,
  changePageNext,
  changePagePrevious,
}) => {
  const arrayPage = getPageArray(totalPage);

  const validNextPage = () => {
    return currentPage < arrayPage.length;
  };
  const validPreviousPage = () => {
    return currentPage > 1;
  };
  return (
    totalPage!==0?
    <nav aria-label="Page navigation movies" className="movies-pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item" disabled={!validPreviousPage()}>
          <a
            className="page-link"
            href="#pagination"
            onClick={(e) => {
              e.preventDefault();
              if (validPreviousPage()) {
                changePagePrevious(currentPage);
              }
            }}
          >
            Previous
          </a>
        </li>
        {arrayPage.map((page) => (
          <li key={page} className={page===currentPage?"page-item active":"page-item"}>
            <a
              className="page-link"
              href="#pennis"
              onClick={(e) => {
                e.preventDefault();
                changePage(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item" disabled={!validNextPage()}>
          <a
            className="page-link"
            href="#pennis"
            onClick={(e) => {
              e.preventDefault();
              if (validNextPage()) {
                changePageNext(currentPage);
              }
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
    :null
  );
};

export default Paginaton;
