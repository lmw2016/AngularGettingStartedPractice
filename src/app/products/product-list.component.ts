import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
   
   templateUrl:'./product-list.component.html',
   styleUrls:['./product-list.component.css']
   //providers:[ProductService]
})
export class ProductListComponent implements OnInit, OnChanges,OnDestroy{

    pageTitle:string='=Product List=';
    imageWidth:number=40
    imageMargin:number=2;
    showImage:boolean=false;
    //listFilter:string='care';
    errorMessage:string;

    _listFilter:string;
    get listFilter():string{
      return this._listFilter;
    }
    set listFilter(value:string){
      this._listFilter=value;
      this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
    }
      
    onRatingClicked(message:string):void{
      this.pageTitle='Product List: '+message;
    }


    filteredProducts:IProduct[];
    products:IProduct[]=[]
      

    /**
     *
     */
    constructor(private productService: ProductService) {
      
    }

    toggleImage():void{
      this.showImage=!this.showImage;
    }

    performFilter(filterBy:string):IProduct[]{
      filterBy=filterBy.toLocaleLowerCase();
      return this.products.filter((product:IProduct)=>
      product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }

    ngOnInit(): void {
      console.log('onInit');
      //this.products=this.productService.getProducts();
      //this.filteredProducts=this.products;
      this.productService.getProducts().subscribe(
        products=>{
          this.products=products;
          this.filteredProducts=this.products
        },
        error=>this.errorMessage=<any>error
      )
    }

    ngOnDestroy(): void {
      console.log('onDestroy');
      
    }
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
      console.log('onChanges');
      
    }
}