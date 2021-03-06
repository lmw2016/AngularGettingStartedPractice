import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { JsonPipe } from "@angular/common";
import { Observable, throwError } from "rxjs";
import {catchError, tap,map} from 'rxjs/operators'

@Injectable({
    providedIn:'root'
})
export class ProductService{
   private productUrl='api/products/products.json';
   constructor(private http: HttpClient){

   }
    getProducts():Observable<IProduct[]>{
         return this.http.get<IProduct[]>(this.productUrl).pipe(
              tap(data=>console.log('All: '+JSON.stringify(data))),
              catchError(this.handleError)
         );
    }

    getProduct(id:number):Observable<IProduct|undefined>{
       return this.getProducts().pipe(
            map((products:IProduct[])=>products.find(p=>p.productId===id))
       )
     
    }

    private handleError(err: HttpErrorResponse){
      let errorMessage="";

      if(err.error instanceof ErrorEvent){
           errorMessage=`An error occured: ${err.error.message}`;
      }else{
           errorMessage=`error status: ${err.status}, error message: ${err.message}`;
      }

      console.error(errorMessage);
      return throwError(err);
    }
}