// Importa o React para o uso dos componentes.
import React from "react";

// Componente Mira que recebe a largura e altura como propriedades.
const Mira = ({ width, height }) => {
  // Define o tamanho da mira.
  const miraSize = 40;
  // Define a espessura da linha da mira.
  const strokeWidth = 2;

  // Retorna o componente SVG com linhas para criar a mira.
  return (
    // Define o elemento SVG com a largura e altura fornecidas e estilo para posicioná-lo corretamente.
    <svg
      width={width}
      height={height}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <line
        x1={width / 2 - miraSize / 2}
        y1={height / 2}
        x2={width / 2 + miraSize / 2}
        y2={height / 2}
        stroke="red"
        strokeWidth={strokeWidth}
      />
      <line
        x1={width / 2}
        y1={height / 2 - miraSize / 2}
        x2={width / 2}
        y2={height / 2 + miraSize / 2}
        stroke="red"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

// Exporta o componente Mira como padrão.
export default Mira;
