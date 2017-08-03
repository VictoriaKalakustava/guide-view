
import {Component} from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
declare var $: any;

@Component ({
  selector: 'app-video-area',
  templateUrl: './videoarea.component.html',
  styleUrls: ['./videoarea.component.css'],
})
export class VideoareaComponent {
  id: string;
  getId(obj: any) {
    console.log(obj.urlinp);
     this.id = null;
     this.id = obj.urlinp.split('?v=')[1];
  }
}
