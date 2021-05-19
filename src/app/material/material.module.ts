import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatDividerModule} from '@angular/material/divider'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Aqui agregar todos los import de los componentes de Material!

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    BrowserAnimationsModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
