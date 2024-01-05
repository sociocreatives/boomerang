import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  public login(): void {
    // Implement your login logic here
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
