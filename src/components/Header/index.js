import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Logo, Cart, Account } from "./styles";

import LuizaCode from '../../assets/images/logo-h-sm.png'

function Header({ cartSize }) {
  return (
    <>
    <div className="multi-colors"/>
    <Container>
      <div className="content">
        <Link to='/'>
          <Logo src={LuizaCode} alt='WandaCoders' />
        </Link>
        <Cart to='/cart'>
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color='#f0decb' />
        </Cart>
        <Account>
          <div>
          <strong> Bem vindo :) </strong>
          <span> Entre ou Cadastra-se </span>
          </div>
        </Account>
       
      </div>
    </Container>
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
