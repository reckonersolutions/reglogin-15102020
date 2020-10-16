import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: 'add-edit.component.html' })

export class AddEditComponent implements OnInit {

  isAddMode: boolean;
  form: FormGroup;
  id: string;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit() {

    this.isAddMode = !this.id;

    // password not required in edit mode
        const passwordValidators = [Validators.minLength(6)];

        if (this.isAddMode) {
            passwordValidators.push(Validators.required);
        }

        this.form = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', passwordValidators]
        });

  }

   // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
            return;
    }
  }

}