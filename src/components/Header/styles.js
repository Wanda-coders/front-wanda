import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  margin: auto;
  width: 70vw;
  .content{
    display: flex;
   justify-content: space-between; 
    align-items: center;
    margin: 50px 0 50px 0;
  }
`;

export const Logo = styled.img`
  width: 120px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #15070e;
    }

    span {
      font-size: 12px;
      color: #15070e;
    }
  }
`;
export const Account = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #15070e;
    }

    span {
      font-size: 12px;
      color: #15070e;
    }
  }
`;

