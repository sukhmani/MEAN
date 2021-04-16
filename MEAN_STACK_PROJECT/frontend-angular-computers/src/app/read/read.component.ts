import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { COMPUTERSS } from '../mock-computers';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})


export class ReadComponent implements OnInit {
  
 

  
  
  Read(){
    alert('Data Processed');
  }

  constructor() {
  
   }

  ngOnInit(): void {
  }

}
