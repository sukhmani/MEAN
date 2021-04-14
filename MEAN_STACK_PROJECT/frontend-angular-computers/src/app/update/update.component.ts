import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { update } from './update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  {

  type = ['A', 'B',
  'C', 'D'];

  Version = ['1', '2',
  '3', '4'];

  Memory = ['1', '2',
  '3', '4'];

mod = new update(9, 'new computer', this.type[0], 'lkj','');

submitted = false;

onSubmit() { this.submitted = true; }


get diagnostic() { return JSON.stringify(this.mod); }
constructor(private httpClient: HttpClient){}
update() {
  //this.mod = new create(42, '', '','','');
  this.httpClient.post('http://localhost:3000/update-button', this.mod)
  .subscribe( response => {
    console.log(response);
  });
}
}
