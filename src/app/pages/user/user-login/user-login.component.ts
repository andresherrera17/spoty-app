import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private _serviceAuth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this._serviceAuth.login();
  }

}
