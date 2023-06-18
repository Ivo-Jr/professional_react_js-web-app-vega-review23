// Importa o React e os estilos personalizados.
import React from 'react';
import * as S from './styles';

// Componente ObjectDetectionResults que recebe as previsões como propriedades.
const ObjectDetectionResults = ({ predictions }) => {
  // Renderiza a lista de previsões.
  return (
    // Utiliza o componente de estilos para criar uma lista de resultados de detecção de objetos.
    <S.ObjectDetectionResultsList>
      { // Mapeia as previsões e cria um componente para cada previsão.
        predictions.map((prediction, index) => {
        // Extrai o nome da classe e a pontuação da previsão.
        const { class: className, score } = prediction;
        // Renderiza o componente de estilos para um item de resultado de detecção de objetos.
        return (
          <S.ObjectDetectionResultItem key={index}>
            { // Exibe o nome da classe e a pontuação como porcentagem.
              `${className} (${(score * 100).toFixed(2)}%)`}
          </S.ObjectDetectionResultItem>
        );
      })}
    </S.ObjectDetectionResultsList>
  );
};

// Exporta o componente ObjectDetectionResults como padrão.
export default ObjectDetectionResults;
