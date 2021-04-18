import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Read } from './read';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

 // type = ['A', 'B','C', 'D'];


mod = new Read('name');

  constructor(private httpClient: HttpClient ) {
    
   }

  ngOnInit(): void {
  }

  
  Read() {
  
    this.httpClient.get('http://localhost:3000/read-button')
    .subscribe( (response: any) => {
      console.log(response);
    });
}
public information: any;
}