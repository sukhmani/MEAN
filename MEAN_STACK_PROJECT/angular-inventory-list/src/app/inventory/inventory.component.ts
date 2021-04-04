import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryComputer = {
    id: 1,
    name:'A'
};

  constructor() { }

  ngOnInit(): void {
  }

}
