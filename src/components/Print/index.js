import React from 'react';
import { Button } from '../Button';

export const Print = () => {
  async function captureScreen() {
    try {
      const displayMediaOptions = {
        video: {
          cursor: "always"
        },
        audio: false
      };

      const mediaStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      const videoElement = document.createElement("video");
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      };

      return videoElement;
    } catch (err) {
      console.error("Error capturing screen:", err);
    }
  }

  async function captureAndSaveScreenAsJPG() {
    try {
      const videoElement = await captureScreen();

      videoElement.addEventListener("loadeddata", () => {
        const canvas = document.createElement("canvas");
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        const imgUrl = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.href = imgUrl;
        link.download = "screen-capture.jpg";
        link.click();

        videoElement.srcObject.getTracks().forEach((track) => track.stop());
      });
    } catch (err) {
      console.error("Error saving screen capture:", err);
    }
  }

  return (
    <Button>
      <div onClick={captureAndSaveScreenAsJPG}>
        CaptureScreen
      </div>
    </Button>
  );
};

