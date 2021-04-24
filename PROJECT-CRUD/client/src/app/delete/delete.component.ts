import { Component, Input, OnInit } from '@angular/core';
import { create } from '../create/create';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { Delete } from './delete';




@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  user: any;
dM: string | undefined;
  
  userName!: string;

  delete(){
   // alert('Deleted');

    this.httpClient.delete('http://localhost:3000/delete-button'+ this.mod.name)
    .subscribe( response => {
      console.log(response);
    });
    

  }
  mod = new Delete('name');

  constructor(private httpClient: HttpClient) { 

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
