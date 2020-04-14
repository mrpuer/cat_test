import React, {useEffect, useState} from "react";
import { StyledFilter } from "./StyledFilter";
import DevService from "../../services/DevService";

function FiltersBar({ setFilter, activeFilter }) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(DevService.getFilters());
  }, []);

  return (
    <StyledFilter>
      <form>
        <select value={activeFilter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">Брэнд</option>
          {filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
        </select>
        <button onClick={() => setFilter('')}>Сбросить фильтр</button>
      </form>
    </StyledFilter>
  );
}

export default FiltersBar;