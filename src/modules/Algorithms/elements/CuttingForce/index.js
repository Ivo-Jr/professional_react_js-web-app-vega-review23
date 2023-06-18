import React, { useState, useEffect } from 'react';

import { HelmetComponent } from '../../../../components/Helmet';
import PDF from '../../../../components/PDF';

import * as S from './styles';

export default function CuttingForce() {
  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);
  // const [nro3, setNro3] = useState(0);
  const [nro4, setNro4] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [projectName, setProjectName] = useState('');
  // const [operacao, setOperacao] = useState('Somar');

  const calcular = () => {
    return (parseFloat(nro1) * parseFloat(nro2) * parseFloat(40)) / 1000;
  }

  useEffect(() => {
    setResultado(calcular())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nro1, nro2, nro4])

  return (
    <HelmetComponent element="CuttingForce">
      <S.Container>
        <S.Content>
          <S.Calc>
            <h1>Cutting Force</h1>
            <label>Project</label>
            <input
              type="text"
              placeholder="Descreva o nome do Projeto"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <label>Cut Perimeter (mm)</label>
            <input
              type="number"
              value={nro1}
              onChange={(e) => setNro1(e.target.value)} />
            <label>Thickness  (mm)</label>
            <input
              type="number"
              value={nro2}
              onChange={(e) => setNro2(e.target.value)} />
            {/* <label>Thickness (mm)</label>
             <input 
                type="number"
                value={nro3}
                onChange={(e) => setNro3(e.target.value)}/>  */}
            <label>Shear stress for low carbon materials (kg/mm²)</label>
            <input
              type="number"
              value={40}
              onChange={(e) => setNro4(e.target.value)} />
            <span>The cutting force is: {resultado.toFixed(2)} tons</span>
            <PDF selector="body" projectName={projectName} />
          </S.Calc>
        </S.Content>
      </S.Container>
    </HelmetComponent>
  );
}