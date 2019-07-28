import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string='Product Detail';
  product:IProduct;

  constructor(private route:ActivatedRoute, private productService: ProductService,
    private router:Router) { }

  ngOnInit() {
    //let id=+this.route.snapshot.paramMap.get('id');
    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle+=`: ${id} `;
    if(id){
      this.productService.getProduct(id).subscribe(
        prod=>
        {this.product=prod
          
        }
      )
    }
    
  }

  onBack():void{
     this.router.navigate(['/products'])
  }

}
