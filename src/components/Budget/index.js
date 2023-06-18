// Budget.js
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import whatsapp from '../../assets/whatsapp.png';
import OnlineStatus from '../OnlineStatus';

function Budget() {
  return (
    <S.Container>
      <S.Text>
        <a
          className="whats"
          href="https://api.whatsapp.com/send/?phone=%2B551151998949&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <OnlineStatus />
          <img src={whatsapp} className="whats" alt="whats" />
        </a>
        <p>
          Soluções de ponta a ponta para Otimização de Processos e Redução de Custo!
        </p>
      </S.Text>
      <S.Button>
        <Link to="/quotes">
          <button>Faça um Orçamento</button>
        </Link>
      </S.Button>
    </S.Container>
  );
}
export default Budget;
