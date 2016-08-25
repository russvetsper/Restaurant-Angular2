import {Component,EventEmitter} from 'angular2/core';
import {Restaurant} from './restaurant.model'


@Component({
selector: 'add-restaurant',
outputs:['onSubmitNewRestaurant'],
templateUrl :'/app/new-restaurant.component.html'
})

export class addRestaurantComponent{
 public onSubmitNewRestaurant: EventEmitter<string[]>;
 constructor(){
  this.onSubmitNewRestaurant =new EventEmitter();
}
addRestaurant(artist:HTMLInputElement,year:HTMLInputElement,genre:HTMLInputElement,price:HTMLInputElement){
  var newRestaurantArray: string[] = [artist.value, year.value, genre.value,price.value];
  this.onSubmitNewRestaurant.emit(newRestaurantArray);
  artist.value = "";
  year.value = "";
  genre.value = "";
  price.value = "";

}
}
