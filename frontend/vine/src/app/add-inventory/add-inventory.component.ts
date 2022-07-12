import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   this.api.getInventory ()
  //     .subscribe(res => {
  //       this.addInventory = res;
  //       console.log(this.addInventory)
  //     })
  } 
}
