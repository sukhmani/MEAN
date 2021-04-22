import { Component, OnInit } from '@angular/core';
import { Computer } from '../computer';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})


export class ComputersComponent implements OnInit {
  computer: Computer =
  {
    id: 1,
    name: 'one'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
