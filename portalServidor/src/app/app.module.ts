import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from 'src/app/shared/layout/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/layout/header/header.component';
import { AsideComponent } from 'src/app/shared/layout/aside/aside.component';
import { SharedModule } from './shared/shared.module';
import { ExemploModule } from './modules/exemplo/exemplo.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ExemploModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
