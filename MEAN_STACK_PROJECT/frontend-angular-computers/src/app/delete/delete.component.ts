import { Component, OnInit } from '@angular/core';
import { create } from '../create/create';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  


  constructor() { }

  ngOnInit(): void {
  }
 
}
