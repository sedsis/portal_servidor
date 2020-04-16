import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { AsideComponent } from 'src/app/shared/layout/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    PushNotificationComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
