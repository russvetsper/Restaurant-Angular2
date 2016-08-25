import { Component,EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model'
import { RatingPipe } from './review.pipe'

@Component({
  selector: 'restaurant-list',
  inputs: ['RestaurantList'],
  pipes:[RatingPipe],
  template:  `
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">View All</option>
  <option value="fiveStars">View 5 Stars</option>
  <option value="fourStars">View 4 Stars</option>
  <option value="threeStars">View 3 Stars</option>

  </select>
  <div *ngFor="#currentRestaurant of RestaurantList | rating:selectedRating" (click)="RestaurantClicked(currentRestaurant)"
    [class.selected]="currentRestaurant === selectedRestaurant">
  <h3>{{currentRestaurant.name}}|{{currentRestaurant.rating}} | {{currentRestaurant.phoneNumber}}  | {{currentRestaurant.address}} | {{currentRestaurant.price| currency:"USD":true:"1.2-4"}} </h3>
  <form *ngIf="currentRestaurant === selectedRestaurant">
  <input  [(ngModel)]="currentRestaurant.name">
  <input  [(ngModel)]="currentRestaurant.phoneNumber"  type="number"  aria-label="amount">
  <input  [(ngModel)]="currentRestaurant.address">
  <input  [(ngModel)]="currentRestaurant.price " type="number"  aria-label="amount">

  </form>
  </div>
  `
})
export class RestaurantListComponent{
  public RestaurantList:Restaurant[];
  public selectedRestaurant:Restaurant;
  public selectedRating:string;

  RestaurantClicked(currentRestaurant:Restaurant):void{
    this.selectedRestaurant=currentRestaurant;
  }

  onChange(optionFromMenu) {
  this.selectedRating = optionFromMenu;
}

}
