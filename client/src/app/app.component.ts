import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response = '';
  a = 10;
  b = 20;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.response = 'loading...';
    this.api.plus('calc', this.a, this.b).then((data) => {
      console.log('api.plus', data);
      this.response = `Result is ${data['result']} (by using gRPC!)`;
    });
  }
}
