import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { create } from '../create/create';


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
