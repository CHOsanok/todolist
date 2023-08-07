import styled from "styled-components";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #ffcef7;
  background-color: #ffc2f5;
  width: 6rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  &:hover {
    background-color: #ed9bff;
  }
  &:active {
    color: #c2ebff;
  }
`;
