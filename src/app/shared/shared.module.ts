import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FullnamePipe } from './pipes/fullname.pipe';
import { MatRadioModule } from '@angular/material/radio';
import { ButtonSizeDirective } from './directives/button-size.directive';


@NgModule({
  declarations: [FormErrorsPipe, FullnamePipe, ButtonSizeDirective],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    FormErrorsPipe,
    FullnamePipe,
    MatTableModule,
    MatRadioModule,
    ButtonSizeDirective
  ],
})
export class SharedModule { }
