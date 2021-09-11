import React from 'react';

import { FooterContent } from './styles';
import LuizaCode from '../../assets/images/logo-m-sm.png'

function Footer(){
  const dateNow = new Date();
  return(
    <>
      <div className="mt-20" />
      <FooterContent>
        <div className="content">
          <img src={LuizaCode} alt="Logo do Grupo" />
          <p>Projeto acadêmico desevolvido pelo grupo WandaCoders </p>
          <p>{ dateNow.getFullYear() } © Todos os direitos reservados.</p>
          <p>WandaCoders.</p>
        </div>
      </FooterContent>
    </>
  )
}

export default Footer