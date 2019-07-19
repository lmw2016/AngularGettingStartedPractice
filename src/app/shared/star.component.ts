import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    ngOnChanges(): void {
        this.starWidth=this.rating*15;
    }
  @Input() rating:number;
   starWidth:number;
   @Output() ratingClicked: EventEmitter<string>
            =new EventEmitter<string>();

   onClick():void{
       this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
   }
}