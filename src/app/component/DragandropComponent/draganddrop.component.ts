import {Component, Input, Output, EventEmitter} from "@angular/core";
import {CloudinaryUploader, CloudinaryOptions} from "ng2-cloudinary";

declare var $: any;
@Component({
  selector: 'app-draganddrop-form',
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css', '../ImageareaComponent/imagearea.component.css'],
})
export class DraganddropComponent {
  cloudinaryImage: any;
  @Output() upImg: EventEmitter<any> = new EventEmitter();
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'dhimzt8vr', uploadPreset: 'rzgfkgx5' })
  );

  constructor(){

    this.uploader.onAfterAddingFile = (item: any) => {
      this.uploader.uploadAll();
      //this.uploaded = true;
      return item;
    };
    //Override onSuccessItem function to record cloudinary response data
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
      //response is the cloudinary response
      //see http://cloudinary.com/documentation/upload_images#upload_response
      this.upImg.emit(JSON.parse(response).public_id);
      console.log('it public url: ' + JSON.parse(response).public_id);
      console.log(this.upImg.emit(JSON.parse(response).public_id));
     return {item, response, status, headers};
    };
}
}
