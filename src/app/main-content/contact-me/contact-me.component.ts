import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule, 
    ReactiveFormsModule
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    acceptTerms: new FormControl(false),
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder) {}


  onFocus(): void {
    console.log('Focus');
  }

  onFocusOut(): void {
    console.log('Focus Out');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
