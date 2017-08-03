
import {Component} from '@angular/core';

declare var $:any;
@Component ({
  selector: 'app-image-area',
  templateUrl: './imagearea.component.html',
  styleUrls: ['./imagearea.component.css'],
})
export class ImageareaComponent {
  constructor(){
    //$('#id-area-image').css({display:'none'});
    this.id_img = 'http://res.cloudinary.com/dhimzt8vr/image/upload/v1501759439/picture-frame-with-mountain-image_318-40293_y8mcrp.jpg';
  }
  id_img: any;
  updateImg(value: any){
    this.id_img = 'http://res.cloudinary.com/dhimzt8vr/image/upload/v1501759439/' + value + '.jpg';
 }
}
