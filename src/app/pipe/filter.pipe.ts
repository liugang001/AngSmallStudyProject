import { Pipe, PipeTransform } from '@angular/core';
//自定义管道内容
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arrList: any, term: any): any {
      if(term===undefined)return;
      return arrList.filter(function(list){
          return list.name.toLowerCase().includes(term.toLowerCase())
      })
  }

}
