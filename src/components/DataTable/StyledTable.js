import styled from "styled-components";

export const StyledTable = styled.table`
  width: 600px;
  border-collapse: collapse;
  border: 1px solid grey;
  text-align: right;
  th {
    border: 1px solid grey;
    font-weight: bold;
    background-color: silver;
    padding: 10px 5px 10px 15px;
  }
  td {
    border: 1px solid grey;
    padding: 50px 5px;
  }
  td:last-child {
    width: 30px;
    text-align: center;
  }
`;