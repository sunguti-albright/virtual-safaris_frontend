import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourist-register',
  templateUrl: './tourist-register.component.html',
  styleUrls: ['./tourist-register.component.css']
})
export class TouristRegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }
  submit(): void {
    this.http.post('http://127.0.0.1:8000/api/tourist/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/tourist/login']));
  }
}
