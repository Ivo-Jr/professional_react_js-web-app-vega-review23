import React, { useState, useRef } from 'react';
import Modal from '../ScreenCaptureAndDisplay/modal.js'
import * as S from './styles';

const ScreenCaptureAndDisplay = () => {
  const canvasRef = useRef();
  const videoElementRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [capturedImageSrc, setCapturedImageSrc] = useState(null);

  async function captureScreen() {
    try {
      const displayMediaOptions = {
        video: {
          cursor: "always"
        },
        audio: false
      };

      const mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      return mediaStream;
    } catch (err) {
      console.error("Error capturing screen:", err);
    }
  }

  function drawScreenStreamToCanvas(mediaStream) {
    const videoElement = document.createElement("video");
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  
    videoElementRef.current = videoElement;
  
    videoElement.oncanplay = () => {
      const canvas = canvasRef.current;
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
  
      const ctx = canvas.getContext("2d");
  
      const drawVideo = () => {
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawVideo);
      };
  
      drawVideo();
    };
  }

  async function captureAndDisplayScreen() {
    try {
      const mediaStream = await captureScreen();
      drawScreenStreamToCanvas(mediaStream);
    } catch (err) {
      console.error("Error displaying screen capture:", err);
    }
  }

  function captureCanvasAsJPG() {
    const canvas = canvasRef.current;
    const imgUrl = canvas.toDataURL("image/jpeg");
    setCapturedImageSrc(imgUrl);
    setIsModalOpen(true);
  }

  return (
    <S.Container>
      <S.ButtonGroup>
        <button onClick={captureAndDisplayScreen}>Capturar e exibir tela</button>
        <button onClick={captureCanvasAsJPG}>Salvar tela do canvas como JPG</button>
      </S.ButtonGroup>
      <S.StyledCanvas ref={canvasRef} width="640" height="480"></S.StyledCanvas>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {capturedImageSrc && <img src={capturedImageSrc} alt="Captured screen" />}
      </Modal>
    </S.Container>
  );
};

export default ScreenCaptureAndDisplay;
