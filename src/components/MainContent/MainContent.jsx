import React, {useEffect, useState} from "react";
import {StyledMAinContent, StyledTitle} from './styled';
import FiltersBar from "../FiltersBar/FiltersBar";
import DataTable from "../DataTable/DataTable";
import DevService from "../../services/DevService";
import Pagination from "../Pagination/Pagination";
import {ITEMS_PER_PAGE} from "../../conf";

function MainContent() {
  const [productsData, setProducts] = useState({ products: [], countAll: 0 });
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    setProducts(DevService.getProducts(1, ''));
  }, []);

  useEffect(() => {
    setProducts(DevService.getProducts(currentPage, activeFilter));
    if(currentPage > productsData.countAll / ITEMS_PER_PAGE && currentPage !== 1) {
      setCurrentPage(Math.ceil(productsData.countAll / ITEMS_PER_PAGE));
    }
  }, [currentPage, activeFilter, productsData.countAll]);

  return (
    <>
      <StyledTitle>Cool Store</StyledTitle>
      <StyledMAinContent>
        <div>
        <DataTable elements={productsData.products} />
        <Pagination pages={productsData.countAll / ITEMS_PER_PAGE} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          Всего товаров выбрано: {productsData.countAll}
        </div>
        <FiltersBar setFilter={setActiveFilter} activeFilter={activeFilter} />
      </StyledMAinContent>
    </>
  );
}

export default MainContent;