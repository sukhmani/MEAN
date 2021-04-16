import { Component, Input, OnInit } from '@angular/core';
import { create } from '../create/create';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})


export class ReadComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  Read(){
    alert('Read');
  }

  }
  

  /*Read() {
  
    , this.mod)
    .subscribe( response => {
      console.log(response);
    });
  }

  get diagnostic() { return JSON.stringify(this.mod); }

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
  }

}
*/


