import {Component, OnInit} from '@angular/core';
import {ApiService} from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  response = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log('AppComponent', this);
    this.response = 'loading...';
    this.api.plus('calc', 1, 2).then((data)=> {
      console.log('api.plus', data);
      this.response = `Loaded ${data['name']} using gRPC!`;
    });
  }
}
