//Essas funções são exemplos simplificados para ilustrar a simulação de Monte Carlo. A função runMonteCarloSimulation usa a função getRandomInt para simular o lançamento de dois dados e, em seguida, multiplica a soma dos resultados pelo multiplicador fornecido nos parâmetros de entrada.
/*
//O multiplicador, neste exemplo, serve como um fator de ajuste aplicado ao resultado da soma dos dois dados lançados na simulação de Monte Carlo. A ideia por trás do multiplicador é permitir que você controle ou ajuste o resultado da simulação conforme necessário.

No exemplo fornecido, o multiplicador é extraído dos parâmetros de entrada e, se não for especificado, seu valor padrão será 1. Quando o multiplicador é 1, o resultado da soma dos dois dados não será afetado e os resultados da simulação refletirão apenas os valores dos lançamentos de dados.

No entanto, se você fornecer um valor de multiplicador diferente de 1, ele afetará os resultados da simulação. Por exemplo, se você usar um multiplicador de 2, todos os resultados da simulação serão multiplicados por 2. Isso pode ser útil em cenários onde você precisa ajustar os resultados da simulação com base em algum fator externo ou simplesmente deseja explorar diferentes cenários de simulação com ajustes nos resultados.

Lembre-se de que este é apenas um exemplo e o multiplicador pode não ser relevante para todas as situações de simulação de Monte Carlo. Dependendo do problema que você está resolvendo, você pode ter diferentes parâmetros de entrada e ajustes a serem aplicados aos resultados. */

// Função para gerar um número inteiro aleatório no intervalo [min, max]
const getRandomInt = (min, max) => {
    // Arredonda min para cima (o valor mínimo de retorno é igual ou maior que min)
    min = Math.ceil(min);
    // Arredonda max para baixo (o valor máximo de retorno é igual ou menor que max)
    max = Math.floor(max);
    // Gera um número inteiro aleatório no intervalo [min, max] e retorna o valor
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  // Função para executar a simulação de Monte Carlo
  export const runMonteCarloSimulation = (iterations, inputParameters) => {
    // Cria um array vazio para armazenar os resultados da simulação
    let results = [];
    // Extrai o multiplicador dos parâmetros de entrada ou usa 1 como valor padrão
    const multiplier = inputParameters.multiplier || 1;
  
    // Loop para executar a simulação 'iterations' vezes
    for (let i = 0; i < iterations; i++) {
      // Gera um número inteiro aleatório entre 1 e 6 (inclusive) para o primeiro dado
      let dice1 = getRandomInt(1, 6);
      // Gera um número inteiro aleatório entre 1 e 6 (inclusive) para o segundo dado
      let dice2 = getRandomInt(1, 6);
      // Soma os valores dos dois dados e multiplica pelo multiplicador
      let sum = (dice1 + dice2) * multiplier;
      // Adiciona o resultado ao array de resultados
      results.push(sum);
    }
  
    // Retorna o array de resultados após a conclusão da simulação
    return results;
  };
  