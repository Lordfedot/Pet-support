import React, { useState, useRef, useEffect } from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import { canvasPreview } from "../helpers/CanvasPreview";
import "react-image-crop/dist/ReactCrop.css";
import { imgPreview } from "../helpers/ImgPreview";
import { Wrapper, CropperButton } from "../styles/components/ImgCropper.styled";

type Props = {
  file: string | null;
  getNewFile: Function;
};
type ReturnFile = {
  previewUrl: string;
  file: File;
};
export default function ImgCroper({ file, getNewFile }: Props) {
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [newFile, setNewFile] = useState({} as ReturnFile | string);

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;

    const crop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        1,
        width,
        height
      ),
      width,
      height
    );

    setCrop(crop);
  }
  const onSetImageClick = () => {
    getNewFile(newFile);
  };
  useEffect(() => {
    (async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
  
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
        const file = await imgPreview(imgRef.current, completedCrop);
        setNewFile(file);
      }
    })();
  }, [completedCrop]);

  return (
    <Wrapper>
      {!!file && (
        <ReactCrop
          maxHeight={208}
          maxWidth={208}
          locked
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
        >
          <img
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
              width: "100%",
              height: "100%",
            }}
            ref={imgRef}
            alt="Crop me"
            src={file}
            onLoad={onImageLoad}
          />
        </ReactCrop>
      )}
      {!!completedCrop && (
        <>
          <div>
            <canvas
              ref={previewCanvasRef}
              style={{
                borderRadius: "40px",
                border: "1px solid black",
                objectFit: "cover",
                width: "208px",
                height: "208px",
              }}
            />
          </div>
          <div>
            <CropperButton type="button" onClick={onSetImageClick}>
              Set Image
            </CropperButton>
          </div>
        </>
      )}
    </Wrapper>
  );
}
