import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class ImageCompressorService {

  constructor() { }

  compress(file: File):Observable<any>{
   
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return Observable.create(observer => {
      reader.onload = ev => {
        const img = new Image();
        img.src = (ev.target as any).result;
        const width = img.width;
        const height = img.height;

        img.onload = () => {
          const element = document.createElement('canvas');
          // const scaleFactor = width / img.width;
          element.width = width;
          element.height = height;
          const context = <CanvasRenderingContext2D>element.getContext('2d');
          context.drawImage(img, 0, 0, width, height);
          
          context.canvas.toBlob(blob => {
            observer.next(
              new File([blob], file.name, {
                type: 'image/jpeg',
                lastModified: Date.now()
              })
            )
          }, 'image/jpeg', 0.8)
        }
      }
    });
  }

}
