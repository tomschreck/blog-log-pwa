import { SourceImage, IImage } from '@app/core/services/image-compressor/image.model';
import { Observable, Observer } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ResizeOptions } from '@app/core/services/image-compressor/ResizeOptions';

export class ImageUtilityService
{
  public static convertFileToImage(file: File ): Observable<IImage>
  {
    return Observable.create(observer =>
    {
      ImageUtilityService.readFile(file)
        .pipe
        (
          // WE HAVE THE FINAL PROCESSED ITEM...
          map((finalProcessedImage: IImage) =>
          {
            observer.next(finalProcessedImage);
            observer.complete();
          })
        )
        .subscribe();
    });
  }

  public static convertFileToCompressedImage(file: File, resizeOptions?: ResizeOptions ): Observable<IImage>
  {
    resizeOptions = resizeOptions || new ResizeOptions();

    return Observable.create(observer =>
    {
      ImageUtilityService.readFile(file)
        .pipe
        (
          // CONVERT INTO HTMLImageElement
          mergeMap((iterativeImage: IImage) => ImageUtilityService.createHTMLImageElement(iterativeImage)),

          // COMPRESS IMAGE
          mergeMap((iterativeImage: IImage) => ImageUtilityService.compressImage(iterativeImage, resizeOptions)),

          // WE HAVE THE FINAL PROCESSED ITEM...
          map((finalProcessedImage: IImage) =>
          {
            observer.next(finalProcessedImage);
            observer.complete();
          })
        )
        .subscribe();
    });
  }



  private static readFile(file: File): Observable<IImage>
  {
    return Observable.create(observer =>
    {
      const reader = new FileReader();

      reader.onload = (progressEvent: ProgressEvent) =>
      {
        const imageResult: IImage = new SourceImage();
        imageResult.file = file;
        imageResult.fileName = file.name;
        imageResult.fileSize = file.size;
        imageResult.imageObjectUrl = URL.createObjectURL(file);
        imageResult.imageDataUrl = (<FileReader>progressEvent.target).result.toString();

        observer.next(imageResult);
        observer.complete();
      };

      reader.readAsDataURL(file);
    });
  }

  private static createHTMLImageElement(sourceImage: IImage): Observable<IImage>
  {
    return Observable.create(observer =>
    {
      const image: HTMLImageElement = new Image();

      // HTML IMAGE ONLOAD FIRES AS SOON AS SOURCE OF HTMLImageElement IS ASSIGNED
      image.onload = () =>
      {
        sourceImage.htmlImageElement = image;

        observer.next(sourceImage);
        observer.complete();
      };

      image.src = sourceImage.imageDataUrl;
    });
  }

  private static compressImage(sourceImage: IImage, options: ResizeOptions): Observable<IImage>
  {
    return Observable.create(observer =>
    {
      const dataURLcompressed = ImageUtilityService.jicCompress(sourceImage.htmlImageElement, options);

      // compressedImage IS ANOTHER IImage
      sourceImage.compressedImage =
      {
        file: undefined,
        fileName: sourceImage.fileName,
        fileSize: ImageUtilityService.byteCount(dataURLcompressed),
        imageObjectUrl: '',
        imageDataUrl: dataURLcompressed,
        htmlImageElement: undefined,
        type: dataURLcompressed.match(/:(.+\/.+);/)[ 1 ],
        compressedImage: undefined
      };

      observer.next(sourceImage);
      observer.complete();
    });
  }

  private static jicCompress(htmlImageElement: HTMLImageElement, options: ResizeOptions)
  {
    const outputFormat = options.Resize_Type;
    const quality = options.Resize_Quality || 50;
    let mimeType = 'image/jpeg';

    if (outputFormat !== undefined && outputFormat === 'png')
    {
      mimeType = 'image/png';
    }

    const maxHeight = options.Resize_Max_Height || 300;
    const maxWidth = options.Resize_Max_Width || 250;

    // console.log('MAX Width n Height');
    // console.log(options.Resize_Max_Height);
    // console.log(options.Resize_Max_Width);
    // console.log('Quality');
    // console.log(quality);

    let height = htmlImageElement.height;
    let width = htmlImageElement.width;

    // calculate the width and height, constraining the proportions
    if (width > height)
    {
      if (width > maxWidth)
      {
        height = Math.round(height *= maxWidth / width);
        width = maxWidth;
      }
    }
    else
    {
      if (height > maxHeight)
      {
        width = Math.round(width *= maxHeight / height);
        height = maxHeight;
      }
    }

    console.log('CANVAS Width n Height', width, height, 'Quality', quality);

    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(htmlImageElement, 0, 0, width, height);

    const newImageData = canvas.toDataURL(mimeType, quality / 100);
    const resultImageObj = new Image();
    resultImageObj.src = newImageData;

    return resultImageObj.src;
  }

  private static byteCount = (s: string): number => encodeURI(s).split(/%..|./).length - 1;
}
