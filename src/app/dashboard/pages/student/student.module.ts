import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { FormStudentComponent } from './components/form-student/form-student.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StudentComponent,
    ListStudentComponent,
    FormStudentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StudentComponent
  ]
})
export class StudentModule { }
