import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JsonHttpHelper } from "app/common/httpHelper";
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { NgxModalModule } from "app/ngx-modal/ngx-modal.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    NgxModalModule
  ],
  providers: [
    JsonHttpHelper, NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
