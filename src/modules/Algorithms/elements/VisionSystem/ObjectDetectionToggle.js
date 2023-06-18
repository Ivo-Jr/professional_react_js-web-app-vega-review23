// Importa as funções e hooks necessários do React e TensorFlow.
import { useEffect, useState, useCallback, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-backend-webgl';

// Componente ObjectDetectionToggle que recebe isActivated, videoRef, canvasRef e onPredictions como propriedades.
const ObjectDetectionToggle = ({ isActivated, videoRef, canvasRef, onPredictions }) => {
  // Declara e gerencia o estado do modelo de detecção de objetos.
  const [model, setModel] = useState(null);
  // Utiliza useRef para controlar a ativação/desativação da detecção de objetos.
  const detectionActive = useRef(false);

  // Função para limpar o canvas.
  const clearCanvas = useCallback(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, [canvasRef]);

  // Função para carregar o modelo de detecção de objetos e iniciar a detecção.
  const loadModelAndDetectObjects = async () => {
    try {
      await tf.backend('webgl');
      const loadedModel = await cocossd.load();
      setModel(loadedModel);
    } catch (error) {
      console.error('Erro ao carregar o modelo:', error);
    }
  };

  // Função para detectar objetos usando o modelo carregado.
  const detectObjects = useCallback(async () => {
    if (!detectionActive.current || !videoRef.current || !canvasRef.current || !model) {
      return;
    }

    const video = videoRef.current.video;

    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      const predictions = await model.detect(video);

      if (detectionActive.current) {
        onPredictions(predictions);
      } else {
        clearCanvas();
        return;
      }

      requestAnimationFrame(detectObjects);
    } else {
      setTimeout(detectObjects, 50);
    }
  }, [videoRef, canvasRef, model, onPredictions, clearCanvas]);

  // Carrega o modelo e inicia a detecção de objetos ao montar o componente.
  useEffect(() => {
    loadModelAndDetectObjects();
  }, []);

  // Atualiza o estado de ativação da detecção e inicia ou limpa o canvas.
  useEffect(() => {
    detectionActive.current = isActivated;

    if (isActivated) {
      detectObjects();
    } else {
      clearCanvas();
    }
  }, [isActivated, detectObjects, clearCanvas]);

  // Limpa o canvas ao desmontar o componente.
  useEffect(() => {
    return () => {
      clearCanvas();
    };
  }, [clearCanvas]);

  // Não renderiza nenhum elemento.
  return null;
};

// Exporta o componente ObjectDetectionToggle como padrão.
export default ObjectDetectionToggle;
