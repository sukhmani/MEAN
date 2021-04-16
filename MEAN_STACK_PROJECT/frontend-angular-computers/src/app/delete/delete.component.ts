import { Component, Input, OnInit } from '@angular/core';
import { create } from '../create/create';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';




@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  user: any;
dM: string | undefined;
  
  userName!: string;

  constructor() { 

    this.user = {
      name: this.userName
     
      
    };

setInterval(() => {
    let cDate = new Date();
    this.dM =  cDate.toDateString() + ' ' + cDate.toLocaleTimeString();
  
  },1000);
  }
  ngOnInit(): void {
  }
 
}
