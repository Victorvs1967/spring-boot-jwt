import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signUpInfo: SignUpInfo;
  isSignedUp = false;
  isSignedUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.signUpInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );

    this.authService.signUp(this.signUpInfo).subscribe(
      data => {
        this.isSignedUp = true;
        this.isSignedUpFailed = false;
      },
      error => {
        this.errorMessage = error.error.message;
        this.isSignedUpFailed = true;
      }
    );
  }

}
