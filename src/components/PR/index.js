import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import PDF from '../PDF';
import * as S from './styles';

export default function PR() {
  const [nro1, setNro1] = useState(0.10);
  const [nro2, setNro2] = useState(0.05);
  const [nro3, setNro3] = useState(0);
  const [nro4, setNro4] = useState(1); // Adicionado novo estado
  const [resultado, setResultado] = useState(0);
  const [projectName, setProjectName] = useState('');

  const calcular = () => {
    return parseFloat(nro1) * parseFloat(nro2) * parseFloat(nro3) * parseFloat(nro4); // Incluir nro4 no cálculo
  }

  useEffect(() => {
    setResultado(calcular())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro1, nro2, nro3, nro4]) // Adicionado nro4 à lista de dependências

  return (
    <S.Container>
          <S.Calc>
             <Helmet>
                <title>PMBOK® Priorização dos Riscos</title>
                <meta name="description" content="Calculadora de Priorização dos Riscos" />
                <meta name="keywords" content="engenharia, engenharia atual, como ganhar dinheiro com a engenharia, engenharia século 21, engenharia moderna, sucesso na engenharia, consultoria em engenharia"/>
                <meta name="author" content="Vega Robotics" />
            </Helmet>
            <h1>PMBOK® Priorização dos Riscos</h1>
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
                onChange={(e) => setNro3(e.target.value)}/>
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
            <label>Classificação da Urgência</label>
              <select
                value={nro4}
                onChange={(e) => setNro4(e.target.value)}>
                  {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            <span>O coeficiênte de risco é de {resultado.toFixed(0)} pontos.</span>   
            <PDF selector="body" projectName={projectName} />  
          </S.Calc>
          <S.ImageContainer />
    </S.Container>
  );
}
