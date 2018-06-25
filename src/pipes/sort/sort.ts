import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({ name: 'dateFormat' })
export class SortPipe implements PipeTransform{
   transform(arr){
    if(arr === undefined){return null;}
    return arr.sort((a, b) => {
      if (a.likes < b.likes) {
        return 1;
      }
      if (a.likes > b.likes) {
        return -1;
      }
      return 0;
    });
  }
}
