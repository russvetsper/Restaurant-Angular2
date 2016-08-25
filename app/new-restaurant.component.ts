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
addRestaurant(name:HTMLInputElement,phoneNumber:HTMLInputElement,address:HTMLInputElement,price:HTMLInputElement,review:HTMLInputElement,rating:HTMLInputElement){
  var newRestaurantArray: string[] = [name.value, phoneNumber.value, address.value,price.value,review.value,rating.value];
  this.onSubmitNewRestaurant.emit(newRestaurantArray);
  name.value = "";
  phoneNumber.value = "";
  address.value = "";
  price.value = "";
  review.value = "";
  rating.value = "";

}
}
