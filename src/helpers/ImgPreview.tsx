import { PixelCrop } from "react-image-crop";
import { canvasPreview } from "./CanvasPreview";

function toBlob(canvas: HTMLCanvasElement): Promise<Blob | null> {
  return new Promise((resolve) => {
    canvas.toBlob(resolve);
  });
}

const blobToFile = (theBlob: Blob, fileName: string): File => {
  const b: any = theBlob;
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  b.lastModifiedDate = new Date();
  b.name = fileName;

  //Cast to a File() type
  const file = new File([theBlob], "image.jpeg", {
    type: theBlob.type,
  });

  return file;
};

export async function imgPreview(
  image: HTMLImageElement,
  crop: PixelCrop,
  scale = 1
) {
  let previewUrl = "";
  const canvas = document.createElement("canvas");
  canvasPreview(image, canvas, crop, scale);

  const blob = await toBlob(canvas);

  if (!blob) {
    console.error("Failed to create blob");
    return null
  }

  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }

  previewUrl = URL.createObjectURL(blob);
  const file = blobToFile(blob, "name");

  return { previewUrl, file};
}
