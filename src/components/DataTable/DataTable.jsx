import React from "react";
import { StyledTable } from "./StyledTable";

function DataTable({ elements }) {
  return (
    <StyledTable>
      <thead>
      <tr>
        <th>Артикул</th>
        <th>Наименование</th>
        <th>Брэнд</th>
        <th>Вес</th>
        <th>Фасовка</th>
        <th>Цена</th>
        <th>В наличии</th>
      </tr>
      </thead>
      <tbody>
      {elements.map(element => {
        return (
          <tr key={element.artnumber}>
            <td>{element.artnumber}</td>
            <td>{element.name}</td>
            <td>{element.brand}</td>
            <td>{element.weight}</td>
            <td>{element.quantity}</td>
            <td>{element.price}</td>
            <td>
              <input type="checkbox" checked={element.stock} readOnly/>
            </td>
          </tr>
        )
      })}
      </tbody>
    </StyledTable>
  );
}

export default DataTable;