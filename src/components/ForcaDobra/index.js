import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import PDF from '../PDF';
import * as S from './styles';

export default function FCorte() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  const [nro3, setNro3] = useState(0);
  // const [nro4, setNro4] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [projectName, setProjectName] = useState('');
  // const [operacao, setOperacao] = useState('Somar');

  const calcular = () => {
    return (((parseFloat(nro1)*parseFloat(nro2)*parseFloat(nro3))*0.00010197)*1/3);
  }

  useEffect(()=>{
    setResultado(calcular())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro1,nro2,nro3])

  return (
    <S.Container>
          <S.Calc>
             <Helmet>
                <title>Calculadora de Força de Dobra</title>
                <meta name="description" content="Calculadora de Força de Dobr" />
                <meta name="keywords" content="engenharia, engenharia atual, como ganhar dinheiro com a engenharia, engenharia século 21, engenharia moderna, sucesso na engenharia, consultoria em engenharia"/>
                <meta name="author" content="Vega Robotics" />
            </Helmet>
            <h1>Bending Force</h1>
            <label>Project</label>
            <input
              type="text"
              placeholder="Descreva o nome do Projeto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <label>Material Rupture Limit (MPa)</label>
            <input 
              type="number"
              value={nro1}
              onChange={(e) => setNro1(e.target.value)}/>      
            <label>Warp Perimeter (mm)</label>
              <input 
                type="number"
                value={nro2}
                onChange={(e) => setNro2(e.target.value)}/>      
            <label>Thickness (mm)</label>
             <input 
                type="number"
                value={nro3}
                onChange={(e) => setNro3(e.target.value)}/> 
            {/* <label>Shear Stress for Low Carbon Steel (kg/mm²)</label>
             <input 
                type="number"
                value={40}
                onChange={(e) => setNro4(e.target.value)}/>  */}
            <span>The bending effort will be: {resultado.toFixed(1)} tons</span>     
            <span>The effort for the plate press will be: {(((nro1*nro2*nro3*0.00010197)*1/3)*0.10).toFixed(2)} tons</span>    
            <PDF selector="body" projectName={projectName} /> 
          </S.Calc>
    </S.Container>
  );
  }