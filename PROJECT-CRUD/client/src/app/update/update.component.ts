import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { update } from './update';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  {
id = [1];
  type = ['A', 'B',
  'C', 'D'];

  Version = ['1', '2',
  '3', '4'];

  Memory = ['1', '2',
  '3', '4'];

mod = new update(this.id[0], 'new computer', this.type[0], 'lkj',this.Memory[1]);

submitted = false;

onSubmit() { this.submitted = true; }


get diagnostic() { return JSON.stringify(this.mod); }
constructor(private httpClient: HttpClient){}
update() {
  
  this.httpClient.put('http://localhost:3000/update-button', this.mod)
  .subscribe( response => {
    console.log(response);
  });
}
}
