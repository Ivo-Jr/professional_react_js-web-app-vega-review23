import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import PDF from "../PDF";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  margin: 20px auto;
`;

const Calc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #66afe9;
  }
`;

const Result = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export default function FCorte() {
  const [numProjections, setNumProjections] = useState(0);
  const [thickness, setThickness] = useState(0);
  const [material, setMaterial] = useState("");
  const [materialConstants, setMaterialConstants] = useState({ k: 0, n: 0 });
  const [result, setResult] = useState({ current: 0, axialForce: 0 });
  const [projectName, setProjectName] = useState("");

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
    switch (e.target.value) {
      case "low_carbon_steel":
        setMaterialConstants({ k: 0.0044, n: 1.5 });
        break;
      case "austenitic_stainless_steel":
        setMaterialConstants({ k: 0.0014, n: 1.75 });
        break;
      case "ferritic_stainless_steel":
        setMaterialConstants({ k: 0.0033, n: 1.6 });
        break;
      case "pure_aluminum":
        setMaterialConstants({ k: 0.0056, n: 1.25 });
        break;
      case "pure_copper":
        setMaterialConstants({ k: 0.0066, n: 1.25 });
        break;
      default:
        setMaterialConstants({ k: 0, n: 0 });
    }
  };

  useEffect(() => {
    if (numProjections && thickness && material) {
      const t = Number(thickness);
      const I = materialConstants.k * Math.pow(t, materialConstants.n);
      // Substitua o cálculo da força axial (F) pela fórmula específica que você deseja usar.
      const F = 0;

      setResult({ current: I, axialForce: F });
    } else {
      setResult({ current: 0, axialForce: 0 });
    }
  }, [numProjections, thickness, material, materialConstants]);

  return (
    <Container>
      <Calc>
        <Helmet>
          {/* Metadados */}
        </Helmet>
        <h1>Corrente de Solda e Força Axial</h1>
        <label>Projeto</label>
        <Input
          type="text"
          placeholder="Descreva o nome do Projeto"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label>Número de projeções</label>
        <Input
          type="number"
          value={numProjections}
          onChange={(e) => setNumProjections(e.target.value)}
        />
        <label>Espessura (mm)</label>
        <Input
          type="number"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        />
        <label>Tipo do material:</label>
        <Input as="select" value={material} onChange={handleMaterialChange}>
          <option value="">Selecione o material</option>
          <option value="low_carbon_steel">Aço de baixo carbono</option>
          <option value="austenitic_stainless_steel">Aço inoxidável austenítico</option>
          <option value="ferritic_stainless_steel">Aço inoxidável ferrítico</option>
          <option value="pure_aluminum">Alumínio puro</option>
          <option value="pure_copper">Cobre puro</option>
        </Input>
        <Result>
          <p>
            A corrente de solda necessária é: {result.current.toFixed(2)} Amperes
          </p>
          <p>
            A força axial necessária é: {result.axialForce.toFixed(2)} (unidade apropriada)
          </p>
        </Result>
        <PDF selector="body" projectName={projectName} />
      </Calc>
    </Container>
  );
}
