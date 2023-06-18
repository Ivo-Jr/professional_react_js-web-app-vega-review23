import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import * as S from './styles';

export default function VigaCalculator() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [nro3, setNro3] = useState(0);
  const [nro5, setNro5] = useState(0);
  const [nro6, setNro6] = useState(0);
  const [nro7, setNro7] = useState(0);

  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);

  const calcular1 = () => {
    return ((parseFloat(nro1) * (parseFloat(nro2) ** 3)) / 12);
  }

  const calcular2 = () => {
    return(((parseFloat(nro3*resultado1)/nro5)));
  }

  const calcular3 = () => {
    return (((parseFloat(5 * resultado2 * (nro6**4)) / (384 * nro7 * resultado1))));
}
  

  useEffect(()=>{
    setResultado1(calcular1())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro1,nro2])

  useEffect(()=>{
    setResultado2(calcular2())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro3,nro5, resultado1])

  useEffect(()=>{
    setResultado3(calcular3())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro6, nro7, resultado1, resultado2])

  return (
    <S.Container>
          <S.Calc>
             <Helmet>
                <title>Calculadora Viga I</title>
                <meta name="description" content="Calculadora Viga I" />
                <meta name="keywords" content="engenharia, engenharia atual, como ganhar dinheiro com a engenharia, engenharia século 21, engenharia moderna, sucesso na engenharia, consultoria em engenharia"/>
                <meta name="author" content="Vega Robotics" />
            </Helmet>
            <h1>Calculadora de Viga I</h1>
            <label>Largura da Viga "b" (mm)</label>
            <input 
              type="number"
              value={nro1}
              onChange={(e) => setNro1(e.target.value)}/>      
            <label>Altura da Viga "h" (mm)</label>
            <input 
              type="number"
              value={nro2}
              onChange={(e) => setNro2(e.target.value)}/> 
            <span>Momento de Inercia será de: {resultado1} mm4</span>

            <br></br>

            <label>Tensão Máxima Permitida "σ" (Mpa)</label>
            <input 
              type="number"
              value={nro3}
              onChange={(e) => setNro3(e.target.value)}/>  
            <label>Momento de Inércia da Viga "I" (mm4)</label>
            <input 
              type="number"
              value={resultado1}
              />     
            <label>Distância entre o centro da seção transversal e o ponto mais distante da Seção "y" (mm)</label>
            <input 
              type="number"
              value={nro5}
              onChange={(e) => setNro5(e.target.value)}/>   
              <span>Cálculo da carga máxima permitida (W) será: {resultado2} (N)</span> 

            <br></br>

            <label>comprimento da viga "L" (mm)</label>
            <input 
              type="number"
              value={nro6}
              onChange={(e) => setNro6(e.target.value)}/>  
              
            <label>Carga Máxima Permitida (N)</label>
            <input 
              type="number"
              value={resultado2}
              />     

            <label>Módulo de elasticidade do aço (E)</label>
            <input 
              type="number"
              value={nro7}
              onChange={(e) => setNro7(e.target.value)}/> 

            <label>Momento de Inercia (I)</label>
            <input 
              type="number"
              value={resultado1}
              />   
              <span>Deflexão máxima permitida (d) será: {resultado3} (mm)</span>   
          </S.Calc>
    </S.Container>
  );
  }