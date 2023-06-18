import React, { useState } from 'react';
import { runMonteCarloSimulation } from '../MonteCarlo/simulation.js';
import Results from '../MonteCarlo/results.js';

const MonteCarlo = () => {
  const [iterations, setIterations] = useState(1000);
  const [inputParameters, setInputParameters] = useState({ multiplier: 1 });
  const [results, setResults] = useState(null);

  const handleSimulate = () => {
    const simulationResults = runMonteCarloSimulation(iterations, inputParameters);
    setResults(simulationResults);
  };

  return (
    <div>
      <h1>Simulação de Monte Carlo</h1>
      <label htmlFor="iterations">Iterações:</label>
      <input
        id="iterations"
        type="number"
        value={iterations}
        onChange={(e) => setIterations(e.target.value)}
      />
      <br />
      <label htmlFor="multiplier">Multiplicador:</label>
      <input
        id="multiplier"
        type="number"
        value={inputParameters.multiplier}
        onChange={(e) =>
          setInputParameters({ ...inputParameters, multiplier: e.target.value })
        }
      />
      <button onClick={handleSimulate}>Executar Simulação</button>
      {results && <Results results={results} />}
    </div>
  );
};
export default MonteCarlo;
