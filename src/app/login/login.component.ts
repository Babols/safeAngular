import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    public loginService: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginService.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['/safe'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}