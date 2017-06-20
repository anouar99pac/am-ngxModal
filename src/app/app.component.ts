import { Component, Input, OnInit, ViewChild, ElementRef, ViewContainerRef } from "@angular/core";
import { NgxModalComponent } from "app/ngx-modal/ngx-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  skus_family_list: string [] = [];
  @ViewChild('ChildModalCopy') ChildModalCopy: NgxModalComponent;

  constructor(private myElement: ElementRef, private viewContainerRef: ViewContainerRef ){
  };
  
  // notifications options it's generic for all notifications.
  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true,
  }
  ngOnInit() {
        this.skus_family_list = ['125deeik','cousfr_dek','skudekkek'];
  }
}
