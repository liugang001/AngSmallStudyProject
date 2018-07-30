import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getdate'
})
export class GetdatePipe implements PipeTransform {

  public transform(number:string,text:string): any {
      return text+345;
  }

}
