import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './convert.to-spaces.pipe';

@NgModule({
  declarations: [
    //ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule,
    //FormsModule
  ],
  exports:[
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
