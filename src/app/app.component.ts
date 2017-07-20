import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private translate: TranslateService){
    this.initLanguage();
  }

  private initLanguage() {
    this.translate.addLangs(["en", "ru"]);
    this.translate.setDefaultLang('en');

    let browserLang = this.translate.getBrowserLang();
    this.changeLanguage(browserLang.match(/en|ru/) ? browserLang : 'en')
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
