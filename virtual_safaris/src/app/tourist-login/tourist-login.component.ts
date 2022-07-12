import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourist-login',
  templateUrl: './tourist-login.component.html',
  styleUrls: ['./tourist-login.component.css']
})
export class TouristLoginComponent implements OnInit {

  form!: FormGroup;
  
  constructor( private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  submit(): void {
    this.http.post('http://127.0.0.1:8000/api/login/', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(() => this.router.navigate(['/']));
  }
}
