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
      new Restaurant("Miller",2013, "rock", 21, 0),
      new Restaurant("Guiness",2013, "rock", 21, 1),
      new Restaurant("Shocktop",2013, "rock", 21, 2),
      new Restaurant("Ocktoberfest",2013, "rap", 21, 3),
      new Restaurant("Corona",2013, "pop", 21, 4)
    ];
  }
  createRestaurant(RestaurantDetail:string[]):void{
    var tempYear : number = parseInt(RestaurantDetail[1]);
    var tempPrice : number = parseInt(RestaurantDetail[3]);

    this.restaurant.push(
       new Restaurant(RestaurantDetail[0], tempYear, RestaurantDetail[2], tempPrice, this.restaurant.length)
     );
  }

}
