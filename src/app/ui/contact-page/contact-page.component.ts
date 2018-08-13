import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin, throwError} from 'rxjs';

type UserFields = 'email' | 'message';
type FormErrors = { [u in UserFields]: string };


@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }
  
  formSubmitted:boolean = false;
  formSuccess:boolean = false;
  userForm: FormGroup;
  formErrors: FormErrors = {
    'email': '',
    'message': '',
  };
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Value must be a valid email address.',
    },
    'message': {
      'required': 'Message is required.',
    }
  };

  buildForm():void {
    this.userForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email,
      ]],
      'message': ['', [
        Validators.required,
      ]],
    });

    this.userForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'message')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key) ) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]} `;
              }
            }
          }
        }
      }
    }
  }

  mailMe():void {
    this.formSubmitted = true;
    var headers = new HttpHeaders();
    headers.append('Accept', 'application/json');

    this.http.post(
      'https://usebasin.com/f/7f3002eb78bc.json', 
      this.userForm.value,
      { headers: headers}
    ).subscribe(
      data => {
        console.log(data)
        if (data && data['success']) {
          this.formSuccess = true;
        }
        return true;
      },
      error => {
        console.error("Error posting.");
        return throwError(error);        
      }
   );
  }

}
