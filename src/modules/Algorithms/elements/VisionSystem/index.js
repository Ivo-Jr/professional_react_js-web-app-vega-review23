  /* eslint-disable jsx-a11y/img-redundant-alt */
  /* eslint-disable react-hooks/exhaustive-deps */
  // /* eslint-disable no-unused-vars */
  import React, { useRef, useState, useCallback, useMemo } from "react";
  import Webcam from "react-webcam";
  import ObjectDetectionToggle from './ObjectDetectionToggle';
  import ObjectDetectionResults from "./ObjectDetectionResults";
  import FileSaver from "file-saver";
  import pixelmatch from "pixelmatch";
  import { HelmetComponent } from "../../../../components/Helmet";
  import Login from '../../../../components/Login/Login.js'
  import * as S from "./styles";
  import PlaygroundSpeedDial from "../../components/SpeedDial";
  import { AdsClick, Cameraswitch, Difference, Plagiarism, RocketLaunch, ScreenshotMonitor, WorkspacePremium } from "@mui/icons-material";
  import ModalComponent from "../../../../components/Modal";

  function VisionSystem() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null); // Adicione esta linha
    const [ipCameraUrl, setIpCameraUrl] = useState(null);
    const [imageClassName, setImageClassName] = useState("");
    const [modal, setModal] = useState(false);
    const [webcamImage, setWebcamImage] = useState(null);
    const [objectDetectionActivated, setObjectDetectionActivated] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [modalMessage, setModalMessage] = useState("");
    const [predictions, setPredictions] = useState([]);
    const [consoleData, setConsoleData] = useState([]);
    const [savedImage, setSavedImage] = useState(null);
    const [diffImage, setDiffImage] = useState(null);
    const [diffPercentage, setDiffPercentage] = useState(null);
    const [toleranceLevel, setToleranceLevel] = useState(100);
    // eslint-disable-next-line no-unused-vars
    const [directory, setDirectory] = useState("");
    const [localStorageImage, setLocalStorageImage] = useState(null);
    const [useLocalStorage, setUseLocalStorage] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [approvedRange, setApprovedRange] = useState([0, 10]);
    const [facingMode, setFacingMode] = useState('user');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [open, setOpen] = useState(false);
    const [sourceType, setSourceType] = useState('webcam'); // 'webcam' ou 'ip'
    const [ipAddress, setIpAddress] = useState('');

    const credentials = {
      client: "VIXEM",
      password: "VR901",
    };
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
    const handlePredictions = useCallback((predictions) => {
      setPredictions(predictions);
    }, []);
    // eslint-disable-next-line no-unused-vars
    const updateIpCameraUrl = (e) => {
      setIpCameraUrl(e.target.value);
    };
    
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
        if (useLocalStorage) {
          img2.src = localStorageImage;
        } else {
          img2.src = savedImage;
        }
      };

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
    }, [webcamRef, directory]);
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
      const diffPercentageAdjusted = (diffPixels / (img1.width * img1.height)) * 100;
      // eslint-disable-next-line
      const [minRange, maxRange] = approvedRange;
      const toleranceLevel = 100 - ((diffPercentageAdjusted / maxRange) * 100);
      setDiffPercentage(diffPercentageAdjusted);
      const diffCtx = diffCanvas.getContext("2d");
      diffCtx.putImageData(diff, 0, 0);
      setDiffImage(diffCanvas.toDataURL());
      // Move setImageClass logic here:
      let currentDateTime = new Date();
      let currentDate = currentDateTime.toLocaleDateString();
      let currentTime = currentDateTime.toLocaleTimeString();
      let message = "";
      let status = "";
      if (diffPercentageAdjusted <= toleranceLevel) {
        setImageClassName("image-match");
        message = "Aprovado";
        status = "Approved";
        setModalMessage(message);
        setModal(true);
      } else {
        setImageClassName("image-mismatch");
        setModal(true);
        message = "Reprovado";
        status = "Disapproved";
        setModalMessage(message);
      }
      message += ` Images are ${diffPercentageAdjusted.toFixed(2)}% different. Status: ${status}.`;
      // setConsoleData((prevState) => [...prevState, { message, date: currentDate, time: currentTime, status }]);
      setConsoleData((prevState) => {
        let newConsoleData = [...prevState];
        const lastIndex = newConsoleData.length - 1;

        if (lastIndex >= 0) {
          newConsoleData[lastIndex] = { message, date: currentDate, time: currentTime, status };
        } else {
          newConsoleData = [{ message, date: currentDate, time: currentTime, status }];
        }

        return newConsoleData;
      });
    }, [approvedRange, setDiffImage, setDiffPercentage]);
    const Console = ({ consoleData }) => {
      return (
        <div>
          {consoleData.map((data, index) => (
            <div key={index}>
              <p>{data.date} {data.time} {diffPercentage ? (
                `Images are ${diffPercentage.toFixed(2)}% different.`
              ) : (
                "Images could not be compared."
              )}
                {diffPercentage && diffPercentage <= toleranceLevel
                  ? " Approved."
                  : " Disapproved."}</p>
            </div>
          ))}
        </div>
      );
    }
    const handleOpen = () => setOpen(true);
    const handleSwitch = () => {
      setFacingMode(facingMode === 'environment' ? 'user' : 'environment');
    };
    const handleTrigger = () => {
      setObjectDetectionActivated((prevState) => !prevState);
    };

    const handleAcceptableDifference = (e) => {
      setToleranceLevel(e.target.value)
    };
    const handleImageCapture = () => {
      capture();
      compareImages();
    };
    const handleQualityStandard = useCallback(() => {
      const currentImage = localStorage.getItem("webcamImage");
      setLocalStorageImage(currentImage);
      setSavedImage(currentImage);
      setUseLocalStorage(!useLocalStorage);
    }, [setLocalStorageImage, setSavedImage, setUseLocalStorage]);
    const handleInspect = () => {
      capture();
      compareImages();
    };
    const handleNewVerification = () => {
      newVerification();
    };
    const handleInputAcceptableDiferrence = () => {
      return (
        <div
          style={{
            display: "flex", justifyContent: "center", alignItems: "center"
          }}
        >
          <input
            type="number"
            min={0}
            max={100}
            placeholder="%"
            value={toleranceLevel}
            onChange={(e) => handleAcceptableDifference(e)}
          />
          <h2>%</h2>
        </div>
      )
    }
    const actionsObject = useMemo(() => {
      return (
        [
          {
            button: 'Switch',
            icon: <Cameraswitch />,
            actionButton: handleSwitch,
          },
          {
            button: 'Trigger',
            icon: <AdsClick />,
            actionButton: handleTrigger,
          },
          {
            button: 'Acceptable Difference',
            icon: <Difference />,
            actionButton: handleOpen,
          },
          {
            button: 'Capture image',
            icon: <ScreenshotMonitor />,
            actionButton: handleImageCapture,
          },
          {
            button: 'Set quality as default',
            icon: <WorkspacePremium />,
            actionButton: handleQualityStandard,
          },
          {
            button: 'Inspect',
            icon: <Plagiarism />,
            actionButton: handleInspect,
          },
          {
            button: 'New verification',
            icon: <RocketLaunch />,
            actionButton: handleNewVerification,
          },
        ]
      )
    }, [handleSwitch,
      handleTrigger,
      handleAcceptableDifference,
      handleImageCapture,
      handleQualityStandard,
      handleInspect,
      handleNewVerification
    ]);
    const storageImage = useMemo(() => {
      const storage = localStorage.getItem("webcamImage");

      if (storage) {
        return storage
      }
    }, [handleImageCapture]);
    const videoConstraints = {
      width: window.innerWidth,
      // height: window.innerHeight,
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
      setSavedImage(null);
    }, []);

    return (
      <S.Container>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} credentials={credentials} />
        ) : (
          <HelmetComponent element="VisionSystem">
            <S.Content>
              <S.Controllers>
              <select onChange={(e) => setSourceType(e.target.value)}>
              <option value="webcam">Webcam</option>
              <option value="ip">IP</option>
  </select>
  {sourceType === 'ip' && (
    <div>
      <input
        type="text"
        placeholder="Digite o IP"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
      />
    </div>
  )}
                <S.Button onClick={() => setFacingMode(facingMode === 'environment' ? 'user' : 'environment')}>
                  Switch camera
                </S.Button>
                <S.Button onClick={handleTrigger}>
                  {objectDetectionActivated ? 'Disable' : 'Activate'} trigger
                </S.Button>
                <S.Button>
                  <span>
                    1º → Acceptable Difference:
                  </span>
                  <S.Range>
                    {handleInputAcceptableDiferrence()}
                  </S.Range>
                </S.Button>
                <S.Button onClick={handleImageCapture}>
                  2º → Capture Image
                </S.Button>
                <S.Button onClick={handleQualityStandard}>
                  3º → Set as Quality Standard
                </S.Button>
                <S.Button onClick={handleInspect}>
                  4º → Inspect
                </S.Button>
                <S.Button onClick={newVerification}>New Verification</S.Button>
              </S.Controllers>
              <S.CentralSection>
                <S.WrapperMain>
                  <S.RealTimeImage>
                    {/* <S.WrapperTitle> */}
                    {/* <S.Title>Real-time Image</S.Title> */}
                    {/* </S.WrapperTitle> */}
                    <>
                      {/* <p>See live camera feed here.</p> */}
                      <S.WebcamWrapper> 
                        <S.ImageResultComponent>
                          <section className="captures-section">
                            {storageImage && (
                              <S.CapturedImage>
                                <S.WrapperTitle>
                                  <S.Title>Captured Image</S.Title>
                                </S.WrapperTitle>
                                <img
                                  src={storageImage}
                                  alt="Captured-Webcam-Image"
                                />
                              </S.CapturedImage>
                            )}
                            <S.CapturedImage>
                              {diffImage && (
                                <>
                                  <S.WrapperTitle>
                                    <S.Title>Result</S.Title>
                                  </S.WrapperTitle>
                                  <S.ResultantImage>
                                    <img
                                      src={diffImage}
                                      className={imageClassName}
                                      alt="Comparison Result"
                                    />
                                  </S.ResultantImage>
                                </>
                              )}
                            </S.CapturedImage>
                          </section>
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
                        </S.ImageResultComponent>
                        {/* <ObjectDetectionResults objectDetectionResults={predictions} /> */}
                        <section>
                          <S.ContainerSpeed>
                            <PlaygroundSpeedDial
                              actionObject={actionsObject}
                            />
                          </S.ContainerSpeed>
                          <S.InnerRight>
                            {storageImage && (
                              <>
                                <S.WrapperTitle style={{ background: "#333" }}>
                                  <S.Title>Captured Image</S.Title>
                                </S.WrapperTitle>
                                <S.CapturedImage>
                                  <img
                                    src={localStorage.getItem("webcamImage")}
                                    alt="Captured-Webcam-Image"
                                  />
                                </S.CapturedImage>
                              </>
                            )}
                            {diffImage && (
                              <>
                                <S.WrapperTitle style={{ background: "#333" }}>
                                  <S.Title>Result</S.Title>
                                </S.WrapperTitle>
                                <S.ResultantImage>
                                  <img
                                    src={diffImage}
                                    className={imageClassName}
                                    alt="Comparison Result"
                                  />
                                </S.ResultantImage>
                              </>
                            )}
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
                          </S.InnerRight>
                          <ObjectDetectionResults predictions={predictions} />
                          {sourceType === 'webcam' ? (
    <Webcam
      ref={webcamRef}
      mirrored={facingMode === 'user'}
      videoConstraints={videoConstraints}
    />
  ) : (
    <video controls width={window.innerWidth} height={window.innerHeight}>
      <source src={ipCameraUrl} type="video/mp4" /> 
      {/* Ajuste o tipo conforme necessário. */}
      Your browser does not support the video tag.
    </video>
    // Nota: você precisará ajustar o path e talvez o tipo de vídeo de acordo com o seu setup.
  )}
                        </section>
                        {/* <Mira width={320} height={240} /> */}
                        <ObjectDetectionToggle
                          isActivated={objectDetectionActivated}
                          videoRef={webcamRef}
                          canvasRef={canvasRef}
                          onPredictions={handlePredictions}
                        />

                        <S.StyledCanvas ref={canvasRef} />
                      </S.WebcamWrapper>
                    </>
                  </S.RealTimeImage>
                  <S.ConsoleWeb>
                    <Console consoleData={consoleData} />
                  </S.ConsoleWeb>
                </S.WrapperMain>
                <S.WrapperSecondary>
                  {storageImage && (
                    <>
                      <S.CapturedImage>
                        <S.WrapperTitle>
                          <S.Title>Captured Image</S.Title>
                        </S.WrapperTitle>
                        {/* <p>Stored image for comparison.</p> */}
                        <img
                          src={storageImage}
                          alt="Captured-Webcam-Image"
                        />
                      </S.CapturedImage>
                    </>)}
                  {diffImage && (
                    <S.ResultantImage>
                      <S.WrapperTitle>
                        <S.Title>Result</S.Title>
                      </S.WrapperTitle>
                      {/* <p>See comparison results here.</p> */}
                      <img
                        src={diffImage}
                        className={imageClassName}
                        alt="Comparison Result"
                      />
                    </S.ResultantImage>
                  )}
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
                </S.WrapperSecondary>

              </S.CentralSection>

            </S.Content>
          </HelmetComponent>
        )}
        <ModalComponent open={open} setOpen={setOpen}>
          {handleInputAcceptableDiferrence()}
        </ModalComponent>
      </S.Container>
    );
  }
  export default VisionSystem;
