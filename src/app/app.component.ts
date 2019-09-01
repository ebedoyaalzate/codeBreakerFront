import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codeBreakerFront';
  secret: string;
  number: string;
  result: string;
  message;

  constructor(private http: HttpClient) {}

  setSecret() {
    this.http.get<any>('http://localhost:3000/setsecret/' + this.secret).subscribe(res => {
      this.message = res.message;
    });
  }

  guessNumber() {
    this.http.get<any>('http://localhost:3000/guess/' + this.number).subscribe(res => {
      this.result = res.result;
    });
  }

  backSetSecret() {
    this.message = false;
    this.result = null;
    console.log(this.message);
  }
}
