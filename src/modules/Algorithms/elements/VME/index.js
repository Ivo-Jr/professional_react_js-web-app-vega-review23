import React, { useState, useEffect } from 'react';

import { HelmetComponent } from '../../../../components/Helmet';
import PDF from '../../../../components/PDF';

import * as S from './styles';

export const VME = () => {
  const [nro1, setNro1] = useState(0.05);
  const [nro2, setNro2] = useState(0.01);
  const [nro3, setNro3] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [projectName, setProjectName] = useState('');
  // const [operacao, setOperacao] = useState('Somar');

  const calcular = () => {
    return (parseFloat(nro1) * (parseFloat(nro2) * parseFloat(nro3)));
  }

  useEffect(() => {
    setResultado(calcular())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro1, nro2, nro3])

  return (
    <HelmetComponent element="VEM">
      <S.Container>
        <S.Content>
          <S.Calc>
            <h1>PMBOK® Valor Monetário Esperado</h1>
            <label>Projeto</label>
            <input
              type="text"
              placeholder="Descreva o nome do Projeto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <label>Valor Operação (R$)</label>
            <input
              type="number"
              value={nro3}
              onChange={(e) => setNro3(e.target.value)} />
            <label>Probabilidade de Ocorrência</label>
            <select
              value={nro1}
              onChange={(e) => setNro1(e.target.value)}>
              <option value={0.10}>0.10</option>
              <option value={0.30}>0.30</option>
              <option value={0.50}>0.50</option>
              <option value={0.70}>0.70</option>
              <option value={0.90}>0.90</option>
            </select>
            <label>Impacto</label>
            <select
              value={nro2}
              onChange={(e) => setNro2(e.target.value)}>
              <option value={0.05}>0.05</option>
              <option value={0.10}>0.10</option>
              <option value={0.20}>0.20</option>
              <option value={0.40}>0.40</option>
              <option value={0.80}>0.80</option>
            </select>
            <span>O VME é de R${resultado.toFixed(2)}</span>
            <PDF selector="body" projectName={projectName} />
          </S.Calc>
          <S.ImageContainer />
        </S.Content>
      </S.Container>
    </HelmetComponent>

  );
}