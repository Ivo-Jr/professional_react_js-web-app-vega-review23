/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useState, useCallback } from "react";
// import ObjectDetectionResults from "./ObjectDetectionResults";
import Webcam from "react-webcam";
import ObjectDetectionToggle from './ObjectDetectionToggle';
import ObjectDetectionResults from "./ObjectDetectionResults";
import FileSaver from "file-saver";
import pixelmatch from "pixelmatch";
import Mira from "./mira";
import { Helmet } from "react-helmet";
// import ObjectDetection from "../ObjectDetection";
import Login from '../Login/Login.js'
import * as S from "./styles";

function VisionSystem() {
  const [imageClassName, setImageClassName] = useState("");
  const [modal, setModal] = useState(false);
  const [webcamImage, setWebcamImage] = useState(null);
  const [objectDetectionActivated, setObjectDetectionActivated] = useState(false);
  const [predictions, setPredictions] = useState([]);

  const [savedImage, setSavedImage] = useState(null);
  const [diffImage, setDiffImage] = useState(null);
  const [diffPercentage, setDiffPercentage] = useState(null);
  const [toleranceLevel, setToleranceLevel] = useState(100);
  const [directory, setDirectory] = useState("");
  const [localStorageImage, setLocalStorageImage] = useState(null);
  const [useLocalStorage, setUseLocalStorage] = useState(false);
  const [approvedRange, setApprovedRange] = useState([0, 10]);
  const [facingMode, setFacingMode] = useState('environment');
  const modalText = diffPercentage && diffPercentage >= 95 ? "Aprovado" : "Reprovado";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [objectDetectionResults, setObjectDetectionResults] = useState([]);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null); // Adicione esta linha

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const credentials = {
    client: "VIXEM",
    password: "VR901",
  };

  const handlePredictions = useCallback((predictions) => {
    setPredictions(predictions);
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear();
    setLocalStorageImage(null);
  };

  const compareImages = useCallback(() => {
    // Zerar a imagem resultante e a porcentagem de diferença antes de iniciar uma nova comparação
    setDiffImage(null);
    setDiffPercentage(null);

    if (!savedImage && !localStorageImage) return;

    const img1 = new Image();
    const img2 = new Image();

    img1.onload = () => {
      img2.onload = () => {
        const width = img1.width;
        const height = img1.height;

        const canvas1 = document.createElement("canvas");
        canvas1.width = width;
        canvas1.height = height;
        const ctx1 = canvas1.getContext("2d");

        const canvas2 = document.createElement("canvas");
        canvas2.width = width;
        canvas2.height = height;
        const ctx2 = canvas2.getContext("2d");

        const diffCanvas = document.createElement("canvas");
        diffCanvas.width = width;
        diffCanvas.height = height;

        const diff = new ImageData(width, height);

        setImageState(img1, img2, canvas1, canvas2, ctx1, ctx2, diff, diffCanvas);
      };
      if (useLocalStorage) {
        img2.src = localStorageImage;
      } else {
        img2.src = URL.createObjectURL(savedImage);
      }
    };

    if (useLocalStorage) {
      img1.src = localStorage.getItem("webcamImage");
    } else {
      img1.src = webcamImage;
    }
  }, [savedImage, webcamImage, localStorageImage, useLocalStorage, clearLocalStorage]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setWebcamImage(imageSrc);
    if (directory) {
      FileSaver.saveAs(imageSrc, `${directory}/captured-image.png`);
    }
    localStorage.setItem("webcamImage", imageSrc);
    compareImages();
  }, [webcamRef, directory, compareImages]);

  const setImageClass = useCallback(
    (diffPercentage, toleranceLevel) => {
      if (diffPercentage <= parseInt(toleranceLevel)) {
        setImageClassName("image-match");
        const modalText = diffPercentage && diffPercentage >= 95 ? "Aprovado" : "Reprovado";
        setModal(true);
      } else {
        setImageClassName("image-mismatch");
        setModal(true);
      }
    },
    []
  );

  const setImageState = useCallback((img1, img2, canvas1, canvas2, ctx1, ctx2, diff, diffCanvas) => {
    ctx1.drawImage(img1, 0, 0);
    ctx2.drawImage(img2, 0, 0);

    const img1Data = ctx1.getImageData(0, 0, img1.width, img1.height);
    const img2Data = ctx2.getImageData(0, 0, img2.width, img2.height);

    const diffPixels = pixelmatch(
      img1Data.data,
      img2Data.data,
      diff.data,
      img1.width,
      img1.height,
      { threshold: 0.1 }
    );

    setDiffPercentage((diffPixels / (img1.width * img1.height)) * 100);

    const diffPercentageAdjusted = (diffPixels / (img1.width * img1.height)) * 100;
    const [minRange, maxRange] = approvedRange;
    const toleranceLevel = 100 - ((diffPercentageAdjusted / maxRange) * 100);
    setImageClass(diffPercentageAdjusted, toleranceLevel);

    const diffCtx = diffCanvas.getContext("2d");
    diffCtx.putImageData(diff, 0, 0);
    setDiffImage(diffCanvas.toDataURL());
  }, [approvedRange, setImageClass, setDiffImage, setDiffPercentage]);

  const videoConstraints = {
    facingMode: facingMode,
  };


  const closeModal = useCallback(() => {
    setModal(false);
    setDiffImage(null);
  }, []);

  const newVerification = useCallback(() => {
    setWebcamImage(null);
    setDiffImage(null);
    setDiffPercentage(null);
    setLocalStorageImage(null);
    setUseLocalStorage(null);
    setModal(null);
  }, []);

  return (
    <S.Container>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} credentials={credentials} />
      ) : (
        <>
          <S.Body>
            <Helmet>
              <title>Vixem Ⓡ</title>
              <meta name="description" content="Sistema de Visão" />
              <meta
                name="keywords"
                content="engenharia, engenharia atual, como ganhar dinheiro com a engenharia, engenharia século 21, engenharia moderna, sucesso na engenharia, consultoria em engenharia"
              />
              <meta name="author" content="Vega Robotics" />
            </Helmet>
            <S.LeftSide>

              <S.Button onClick={() => setFacingMode(facingMode === 'environment' ? 'user' : 'environment')}>
                Switch camera
              </S.Button>
              <S.Button onClick={() => setObjectDetectionActivated((prevState) => !prevState)}>
                {objectDetectionActivated ? 'Disable' : 'Activate'} trigger
              </S.Button>
              <S.Button>1º → Acceptable Difference:
                <S.Range>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    placeholder="%"
                    value={toleranceLevel}
                    onChange={(e) => {
                      setToleranceLevel(e.target.value);
                    }}
                  />
                  <h1>%</h1>
                </S.Range>
              </S.Button>
              <S.Button onClick={() => {
                capture();
                compareImages();
              }}>2º → Capture Image</S.Button>
              <S.Button
                onClick={() => {
                  setLocalStorageImage(localStorage.getItem("webcamImage"));
                  setUseLocalStorage(!useLocalStorage);
                }}
              >
                3º → Set as Quality Standard
              </S.Button>
              <S.Button onClick={() => {
                capture();
                compareImages();
              }}>4º → Inspect</S.Button>
              <S.Button onClick={newVerification}>New Verification</S.Button>
            </S.LeftSide>
            <S.CentralSection>
              <S.RealTimeImage>
                <h1>Real-time Image</h1>
                <ObjectDetectionResults predictions={predictions} /> {/* Adicione esta linha */}
                {/* <p>See live camera feed here.</p> */}
                <S.WebcamWrapper>
                  {/* <ObjectDetectionResults objectDetectionResults={predictions} /> */}
                  <Webcam ref={webcamRef} width={320} height={240} videoConstraints={videoConstraints} />
                  <Mira width={320} height={240} />
                  <ObjectDetectionToggle
                    isActivated={objectDetectionActivated}
                    videoRef={webcamRef}
                    canvasRef={canvasRef}
                    onPredictions={handlePredictions}
                  />

                  <S.StyledCanvas ref={canvasRef} />
                </S.WebcamWrapper>

              </S.RealTimeImage>

              <S.CapturedImage>
                <h1>Captured Image</h1>
                {/* <p>Stored image for comparison.</p> */}
                <img
                  src={localStorage.getItem("webcamImage")}
                  alt="Captured Webcam Image"
                  style={{ borderRadius: "10px" }}
                />
              </S.CapturedImage>
              <S.ResultantImage>
                <h1>Result</h1>
                {/* <p>See comparison results here.</p> */}
                {diffImage && (
                  <img
                    src={diffImage}
                    className={imageClassName}
                    style={{ width: "320px", height: "240px", borderRadius: "10px" }}
                    alt="Comparison Result"
                  />
                )}
              </S.ResultantImage>
              <S.Modal>
                {modal && (
                  <div className="modal">
                    <S.Modal>
                      <div className="modal">
                        <p>
                          {diffPercentage ? (
                            `Images are ${diffPercentage.toFixed(2)}% different.`
                          ) : (
                            "Images could not be compared."
                          )}
                          {diffPercentage && diffPercentage <= toleranceLevel
                            ? " Approved."
                            : " Disapproved."}
                        </p>
                        <S.Button onClick={closeModal}>Close</S.Button>
                      </div>
                    </S.Modal>
                  </div>
                )}
              </S.Modal>
            </S.CentralSection>
          </S.Body>
        </>
      )}
    </S.Container>
  );
}
export default VisionSystem;