import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Read } from './read';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {




mod = new Read('Enter name');

  constructor(private httpClient: HttpClient ) {
    
   }

  ngOnInit(): void {
  }

  information: string = "";
  Read() {
    console.log(this.mod.name);
    this.httpClient.get('http://localhost:3000/read-button/'+this.mod.name)
    .subscribe( (response: any) => {
      console.log(response);
      this.information = response.message;
    });
}

}