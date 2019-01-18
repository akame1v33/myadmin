import { Component, OnInit, Input } from '@angular/core';
import { ImageCompressorService } from '../../services/image-compressor.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'rim-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.scss']
})
export class FileChooserComponent implements OnInit {


  @Input() public label:string;



  public selectedFile:File = null;
  public origPreview:string;
  public compressPreview:string;

  constructor(
    private _imageCompressor:ImageCompressorService, 
    private ng2ImgMax: Ng2ImgMaxService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log( 'label -> ' , this.label );
  }

  change(_fileList:FileList){
    // console.log(_fileList)
    var selectedFile:File = _fileList.item(0);
    console.log('orig size: ',selectedFile.size );

     this.getOrigPreview(selectedFile);

     this._imageCompressor.compress(selectedFile).subscribe(result => {
      //  console.log(  )
       this.getImagePreview(result);
       console.log('compressed size -> ', result.size);
     })

    //  this.ng2ImgMax.compress(selectedFile, 0)

    //  this.ng2ImgMax.resizeImage(selectedFile, 10000, 375).subscribe(result => {
    //   this.getImagePreview(result);
    //   console.log(result.size);
    //  })
    //  this.compress(selectedFile);

    // this.ng2ImgMax.compressImage(selectedFile, 0.005).subscribe(result => {
    //   console.log(result);
    //   this.getImagePreview(result);
    // })

    // var reader:FileReader = new FileReader();
    
    // reader.readAsDataURL(selectedFile);
    // reader.onloadend = (e) => {
    //   console.log(reader.result);
    // }

  }

  getImagePreview(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.compressPreview = reader.result;
    };
  }

  getOrigPreview(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.origPreview = reader.result;
    };
  }


  
// compress(e) {
  
//   const fileName = e.name;
//   const reader = new FileReader();
//   reader.readAsDataURL(e);
//   reader.onload = event => {
//       const img = new Image();
//       img.src = (event.target as any).result;
//       const width = img.width;
//       const height = img.height;
//       img.onload = () => {
//               const elem = document.createElement('canvas');
//               elem.width = width;
//               elem.height = height;
//               const ctx = elem.getContext('2d');
//               // img.width and img.height will give the original dimensions
//               ctx.drawImage(img, 0, 0, width, height);
//               ctx.canvas.toBlob((blob) => {
//                   const file = new File([blob], fileName, {
//                       type: 'image/jpeg',
//                       lastModified: Date.now()
//                   });
//                   this.getImagePreview(file);
//                   console.log('compresssor from net - > ', file.size);
//               }, 'image/jpeg', 0.10);
//           },
//           reader.onerror = error => console.log(error);
//   };
// }


  
}
