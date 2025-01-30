import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacter } from './components/form/form.component';




@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacter,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
