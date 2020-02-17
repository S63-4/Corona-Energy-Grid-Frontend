import { Component, OnInit } from '@angular/core';
import { user } from '../domain/user';
import { AuthenticationService } from '../REST/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  customerCode: number;
  email: string;
  password: string;

  newuser: user;

  passwordConfirm: string;
  result: string;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  register(): void {
      this.newuser = new user(this.customerCode, this.email, this.password);
      if (this.password == this.passwordConfirm){
        this.authenticationService.postRegister(this.newuser).subscribe(
          result=> {
            if (result == 'saved'){
              this.router.navigate(['dashboard']);
            }
          }
        );
      } else {
        alert("Make sure passwords match.");
      }
  }
}
