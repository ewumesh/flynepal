import { Component } from '@angular/core';
import { Settings, AppSettings } from '../../components/shared/services/color-option.service';

@Component({
  selector: 'app-color-options',
  templateUrl: './color-options.component.html',
  styleUrls: ['./color-options.component.sass']
})
export class ColorOptionsComponent {
  public showOptions:boolean = false;
  public settings: Settings;
  constructor(public appSettings:AppSettings) { 
    this.settings = this.appSettings.settings; 
  }

  public changeTheme(theme){
    this.settings.theme = theme;       
  } 
}