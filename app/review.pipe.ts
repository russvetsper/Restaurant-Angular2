import { Pipe, PipeTransform } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: 'rating',
  pure: false
})
export class RatingPipe implements PipeTransform {
  transform(input: Restaurant[], info) {
    var chosenRating = info[0];
    var output: Restaurant[] = [];
    if (chosenRating === "fiveStars") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].rating===5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenRating === "fourStars") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].rating>=4&&input[i].rating<5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (chosenRating === "threeStars") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].rating<4) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
