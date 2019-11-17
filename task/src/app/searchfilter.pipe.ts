import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(!args){
      return value;
    }else{
      
    }
  
  }

}
