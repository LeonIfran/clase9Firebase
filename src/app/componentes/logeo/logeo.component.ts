import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl, NgModel, NgControl} from '@angular/forms';
import { AuthServiceService } from './../../servicios/auth-service.service';

@Component({
  selector: 'app-logeo',
  templateUrl: './logeo.component.html',
  styleUrls: ['./logeo.component.css']
})
export class LogeoComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  logeoForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  constructor(private authService: AuthServiceService) { }

  tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'se Logeo con exito';
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }
  ngOnInit() {}

}

