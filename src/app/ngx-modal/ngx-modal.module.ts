import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from "ngx-bootstrap/modal";
import { SimpleNotificationsModule } from "angular2-notifications";
import { NgxModalComponent } from "app/ngx-modal/ngx-modal.component";

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [NgxModalComponent],
  exports:[NgxModalComponent]
})
export class NgxModalModule { }
