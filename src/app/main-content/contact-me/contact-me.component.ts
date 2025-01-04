import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  secretKey: string = 'mpwworwb';

  submitted = false;
  emailFocused = false;
  messageSentSuccess: boolean = false;
  messageSentError: boolean = false;
  events: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private translocoService: TranslocoService
  ) {}

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
      if (
        emailControl?.invalid &&
        (emailControl.dirty || emailControl.touched)
      ) {
        this.submitted = false;
      }
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(form: any) {
    this.submitted = true;  
    if (this.form.invalid) {
      return;
    }
    // für Email-Versand bitte die folgenden Zeilen aktivieren
    // this.postEmail( form.value.name.toString(), form.value.email.toString(),
    //   form.value.message.toString()
    // )
    //   .pipe(map((res) => res))
    //   .subscribe(
    //     (res) => {},
    //     (error) => {
    //       this.messageSentError = true;
    //       this.form.reset();
    //       setTimeout(() => {
    //         this.messageSentError = false;
    //       }, 3000);
    //     },
    //     () => {
    //       this.messageSentSuccess = true;
    //       setTimeout(() => {
    //         this.messageSentSuccess = false;
    //       }, 3000);
    //     }
    //   );
  }

  //Send an email using formspree.io account
  postEmail(name: String, email: String, message: String): Observable<string> {
    let url = `https://formspree.io/f/${this.secretKey}`;

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    });

    let data = `name=${name}&email=${email}&message=${message}`;

    return this.httpClient.post<{ message: string }>(url, data, { headers }).pipe(
      map((response) => {
        console.log('email sent', response);
        return response.message; // Ensure the response is a string
      }),
      catchError((error) => {
        console.log('error sending email', error);
        return of('error'); // Return a string in case of error
      })
    );
  }

  displayMessage() {
    // Implement your success message logic here
    console.log('Email sent successfully');
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
    const lang = this.translocoService.getActiveLang();
    if (errors.required) {
      switch (controlName) {
        case 'name':
          return lang === 'de' ? 'Name ist erforderlich' : 'Name is required';
        case 'email':
          return lang === 'de'
            ? 'E-Mail ist erforderlich'
            : 'Email is required';
        case 'message':
          return lang === 'de'
            ? 'Nachricht ist erforderlich'
            : 'Message is required';
        default:
          return lang === 'de'
            ? 'Dieses Feld ist erforderlich'
            : 'This field is required';
      }
    }
    if (errors.email) {
      return lang === 'de' ? 'E-Mail ist ungültig' : 'Email is invalid';
    }
    return '';
  }
}
