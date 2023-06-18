import React from 'react';

const Results = ({ results }) => {
  // Função para calcular a frequência de cada resultado
  const calculateFrequencies = (results) => {
    const frequencies = {};

    results.forEach((result) => {
      if (frequencies[result]) {
        frequencies[result]++;
      } else {
        frequencies[result] = 1;
      }
    });

    return frequencies;
  };

  // Função para classificar os resultados por frequência
  const sortResultsByFrequency = (frequencies) => {
    return Object.entries(frequencies).sort((a, b) => b[1] - a[1]);
  };

  const frequencies = calculateFrequencies(results);
  const sortedResults = sortResultsByFrequency(frequencies);

  return (
    <div>
      <h2>Resultados da Simulação</h2>
      <h3>Resumo Classificatório</h3>
      <table>
        <thead>
          <tr>
            <th>Resultado</th>
            <th>Frequência</th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.map(([result, frequency], index) => (
            <tr key={index}>
              <td>{result}</td>
              <td>{frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
