export interface IImage
{
  file: File;
  fileName: string;
  fileSize: number;
  imageObjectUrl: string;
  imageDataUrl: string;
  htmlImageElement: HTMLImageElement;
  type: string;
  compressedImage: IImage;
}

export class SourceImage implements IImage
{
  public file: File;
  public fileName: string;
  public fileSize: number;
  public imageObjectUrl: string;
  public imageDataUrl: string;
  public htmlImageElement: HTMLImageElement;
  public type: string;
  public compressedImage: IImage;
}
