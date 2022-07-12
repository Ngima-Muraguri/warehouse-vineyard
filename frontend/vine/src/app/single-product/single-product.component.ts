import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public priceList: any;
  public productList: any;


  constructor(private api: ApiService) { }



  ngOnInit(): void {
    this.api.getPrice()
      .subscribe(res => {
        this.priceList = res;
        console.log(this.priceList)
      })

      this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        console.log(this.productList)
      })
  }

  
    
}

  
    
