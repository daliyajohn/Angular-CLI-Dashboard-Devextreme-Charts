import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showMenu: boolean = false;
    showTable:boolean = false;
	public isTlbOpen:any;
  	public isTlbClose:any;
	constructor( public service: AppService) {
    	this.service.showMenu.emit(false);
	}
}
