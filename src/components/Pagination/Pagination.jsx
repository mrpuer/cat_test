import React from "react";
import {PaginationContainer} from "./styledPagination";

const Pagination = ({ pages, currentPage, setCurrentPage}) => {
  const prevNextPageHandler = (direction) => {
    if (direction === 'prev') {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } else {
      if (currentPage < pages) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  const makePages = () => {
    let result = [];
    for (let i = 2; i <= pages; i += 1) {
      result.push(<span key={i} onClick={() => setCurrentPage(i)}>{i}</span>);
    }

    return result;
  };

  return (
    <PaginationContainer>
      <span onClick={() => prevNextPageHandler('prev')}>Предыдущая</span>
      <span onClick={() => currentPage !== 1 && setCurrentPage(1)}>1</span>
        {makePages()}
      <span onClick={() => prevNextPageHandler('next')}>Следующая</span>
  </PaginationContainer>
  );
};

export default Pagination;