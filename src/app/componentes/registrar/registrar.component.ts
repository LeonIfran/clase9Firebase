import { AuthServiceService } from './../../servicios/auth-service.service';
import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl, NgModel, NgControl} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  /* authService: AuthServiceService; */
  errorMessage: string;
  successMessage: string;
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('',[Validators.required])
  });
  constructor(private authService: AuthServiceService) { }

  tryRegister(value) {
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
      this.authService.enviarVerificacion();
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }
  ngOnInit() {
  }

}
