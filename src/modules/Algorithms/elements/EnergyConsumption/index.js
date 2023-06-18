import React, { useState, useEffect } from 'react';

import { HelmetComponent } from '../../../../components/Helmet';
import PDF from '../../../../components/PDF';

import * as S from './styles';

// Código similar ao BenddingForce

export default function EnergyConsumption() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [nro3, setNro3] = useState(0);
  const [nro4, setNro4] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [projectName, setProjectName] = useState('');
  // const [operacao, setOperacao] = useState('Somar');

  const calcular = () => {
    return Math.round(((parseFloat(nro1) * parseFloat(nro2) * parseFloat(nro3)) / 1000));
  }

  const calcular1 = () => {
    return Math.round(((parseFloat(nro1) * parseFloat(nro2) * parseFloat(nro3)) / 1000) * (nro4));
  }

  useEffect(() => {
    setResultado(calcular())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro1, nro2, nro3, nro4])

  useEffect(() => {
    setResultado1(calcular1())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro1, nro2, nro3, nro4])

  // if(nro1 === '' || nro2 === '' || nro3 === '' || nro4 === '') {
  //   alert("Preencha todos os campos")
  //   return;
  // "Somente daria bom, caso eu não tivesse o UseEffect"}

  return (
    <HelmetComponent element="EnergyConsumption">
      <S.Container>
        <S.Content>
          <S.Calc>
            <h1>Consumo de Energia</h1>
            <label>Projeto</label>
            <input
              type="text"
              placeholder="Descreva o nome do Projeto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <label>Potência do equipamento (Watts)</label>
            <input
              type="number"
              value={nro1}
              onChange={(e) => setNro1(e.target.value)} />
            <label>Utilização Diária (Horas)</label>
            <input
              type="number"
              value={nro2}
              onChange={(e) => setNro2(e.target.value)} />
            <label>Dias Utilizados (Dias)</label>
            <input
              type="number"
              value={nro3}
              onChange={(e) => setNro3(e.target.value)} />
            <label>Bandeira Tarifária (Dados Enel 06/22)</label>
            <select
              name="Seleção de Tarifa"
              onChange={(e) => setNro4(e.target.value)}>
              <option placeholder="Selecione a Bandeira">Selecione a Bandeira</option>
              <option type="number" value={2.989}>Bandeira Amarela</option>
              <option type="number" value={6.50}>Bandeira Vermelha Patamar 1</option>
              <option type="number" value={9.795}>Bandeira Vermelha Patamar 2</option>
            </select>
            <span>O consumo é de: {resultado} kWh/mês, logo, o consumo financeiro será de R$ {resultado1.toFixed(2)}.</span>
            <PDF selector="body" projectName={projectName} />
          </S.Calc>
        </S.Content>
      </S.Container>
    </HelmetComponent>


  );
}