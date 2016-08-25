import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model'
import { RestaurantListComponent } from './restaurant-list.component'
import { addRestaurantComponent } from './new-restaurant.component'
@Component({
  selector: 'my-app',
  directives:[RestaurantListComponent,addRestaurantComponent],
  template: `
    <div class="container">
      <h1>Restaurant Inventory</h1>
      <h2>Add New Restaurant Now</h2>
      <restaurant-list [RestaurantList]="restaurant"></restaurant-list>
      <add-restaurant (onSubmitNewRestaurant)="createRestaurant($event)"></add-restaurant>

    </div>
  `
})
export class AppComponent {
  public restaurant: Restaurant[];
  constructor() {
    this.restaurant = [
      new Restaurant("Parl",2060000000, "Pine st,Seattle", 21, "Good",0),
      new Restaurant("Jade Dragnon",2060000000, "Pike st,Seattle", 21, "Good",1),
      new Restaurant("Panda",2060000000, "University st,Seattle", 21, "Good",2),
      new Restaurant("Sichuan Cousine",2060000000, "Pike st", 21, "Good",3),
      new Restaurant("KFC",2060000000, "Bell st", 21, "Good",4)
    ];
  }
  createRestaurant(RestaurantDetail:string[]):void{
    var tempPhone : number = parseInt(RestaurantDetail[1]);
    var tempPrice : number = parseInt(RestaurantDetail[3]);
    var tempRating : number = parseInt(RestaurantDetail[3]);

    this.restaurant.push(
       new Restaurant(RestaurantDetail[0], tempPhone, RestaurantDetail[2], tempPrice, this.restaurant.length)
     );
  }

}
