import React, {
  useState,
  useRef,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import { canvasPreview } from "../../helpers/CanvasPreview";
import "react-image-crop/dist/ReactCrop.css";
import { imgPreview } from "../../helpers/ImgPreview";
import {
  Wrapper,
  CropperButton,
} from "../../styles/components/ImgCropper.styled";
import { updateUser } from "../../helpers/Api";

type Props = {
  file: string | null;
  setSrc: Dispatch<SetStateAction<string>>;
  setShowModal: Dispatch<SetStateAction<boolean>>
};

export default function AvatarCroper({ file, setSrc,setShowModal }: Props) {
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [newFile, setNewFile] = useState(
    {} as { previewUrl: string; file: File } | null
  );

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
  const onSetImageClick = async () => {
    if (newFile) {
      const { previewUrl, file } = newFile;
      const result = await updateUser('avatar', file)
      
      setSrc(previewUrl);
      if (result?.status === 201) {
        setShowModal(false)
      }
    }
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
          circularCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
        >
          <img
            style={{
              maxWidth: "500px",
              maxHeight: "350px",
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
                borderRadius: "50%",
                border: "1px solid black",
                objectFit: "cover",
                width: "233px",
                height: "233px",
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
