import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemploComponent } from './paginas/exemplo/exemplo.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ExemploComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExemploModule { }
