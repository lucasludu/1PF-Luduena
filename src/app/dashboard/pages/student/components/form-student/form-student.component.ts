import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models/student';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styles: [
  ]
})
export class FormStudentComponent {


  studentForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<FormStudentComponent>,

    @Inject(MAT_DIALOG_DATA) public student?: Student
  ) {
    
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    if(this.student) {
      this.studentForm.patchValue(this.student);
    }

  }


  onSubmit(): void {
    if(this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.studentForm.value);
    }
  }


}
