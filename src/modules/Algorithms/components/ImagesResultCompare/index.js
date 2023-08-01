import { CapturedImage, ImageResultComponent, ResultantImage, Title, WrapperTitle } from "./styles"

export const ImagesResultCompare = ({ diffImage, imageClassName, diffPercentage, closeModal, toleranceLevel }) => {
  return (
    <ImageResultComponent>
      <section className="captures-section">
        <CapturedImage>
          <WrapperTitle>
            <Title>Captured Image</Title>
          </WrapperTitle>
          <img
            src={localStorage.getItem("webcamImage")}
            alt="Captured-Webcam-Image1"
          />
        </CapturedImage>
      </section>

      <ResultantImage>
        {diffImage && (
          <img
            src={diffImage}
            className={imageClassName}
            alt="Comparison Result"
          />
        )}
      </ResultantImage>

      {/* {true && (
        <Modal>
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
        </Modal>
      )} */}
    </ImageResultComponent>
  )
}