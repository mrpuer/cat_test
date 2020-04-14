import styled from "styled-components";

export const StyledFilter= styled.div`
  padding: 0 20px;
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    
    select {
      position: relative;
      display: block;
      padding: 10px;
      border: 2px solid grey;
      border-radius: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-family: inherit;
      font-size: 14px;
      color: #444;
    }
    
    &:after {
      content: "";
      display: block;
      border-style: solid;
      border-width: 10px 10px 0 10px;
      border-color: silver transparent transparent transparent;
      pointer-events: none;
      position: absolute;
      top: 18px;
      right: 1rem;
      z-index: 1;
     }
     
    button {
      padding: 10px;
      border: 2px solid grey;
      margin-top: 20px;
      font-size: 14px;
    }
  }
`;
