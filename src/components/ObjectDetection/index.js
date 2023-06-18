import React, { useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as S from "./styles";
import * as tf from '@tensorflow/tfjs';
import * as cocossd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-backend-webgl';

function ObjectDetection() {
  const webcamRef = useRef();
  const canvasRef = useRef();

  const loadModelAndDetectObjects = async () => {
    try {
      await tf.backend('webgl');
      const model = await cocossd.load();
      detectObjects(model);
    } catch (error) {
      console.error('Erro ao carregar o modelo:', error);
    }
  };

  const detectObjects = async (model) => {
    if (webcamRef.current && canvasRef.current) {
      const video = webcamRef.current.video;
  
      // Verifique se o vídeo está pronto
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const predictions = await model.detect(video);
        renderPredictions(predictions);
  
        requestAnimationFrame(() => {
          detectObjects(model);
        });
      } else {
        // Tente novamente se o vídeo ainda não estiver pronto
        setTimeout(() => {
          detectObjects(model);
        }, 50);
      }
    }
  };

  const renderPredictions = (predictions) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.canvas.width = webcamRef.current.video.videoWidth;
    ctx.canvas.height = webcamRef.current.video.videoHeight;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    predictions.forEach((prediction) => {
      const [x, y, width, height] = prediction['bbox'];
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.8)';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);

      ctx.font = '18px Arial';
      ctx.fillStyle = 'rgba(0, 255, 0, 0.8)';
      const labelText = `${prediction['class']} ${(prediction['score'] * 100).toFixed(2)}%`;
      ctx.fillText(labelText, x, y - 5);
    });
  };

  useEffect(() => {
    loadModelAndDetectObjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
        <S.StyledTitle>Detecção de Objetos</S.StyledTitle>
        <S.VideoCanvasWrapper>
          <Webcam
            ref={webcamRef}
            width="600"
            height="400"
            mirrored={false}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: 'environment' }}
          />
          <S.StyledCanvas ref={canvasRef} />
        </S.VideoCanvasWrapper>
    </S.Container>
  );
}

export default ObjectDetection;
