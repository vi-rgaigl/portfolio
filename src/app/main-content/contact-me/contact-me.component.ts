import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  submitted = false;
  emailFocused = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });

    // Listen for value changes on the email control
    this.form.get('email')?.valueChanges.subscribe(() => {
      const emailControl = this.form.get('email');
      if (emailControl?.invalid && (emailControl.dirty || emailControl.touched)) {
        this.submitted = false;
      }
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onFocus(controlName: string) {
    if (controlName === 'email') {
      this.emailFocused = true;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  getErrorMessage(controlName: string, errors: any): string {
    if (errors.required) {
      switch (controlName) {
        case 'name':
          return 'Name is required';
        case 'email':
          return 'Email is required';
        case 'message':
          return 'Message is required';
        default:
          return 'This field is required';
      }
    }
    if (errors.email) {
      return 'Email is invalid';
    }
    return '';
  }
}
