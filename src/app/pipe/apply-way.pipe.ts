import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'applyWay'
})
export class ApplyWayPipe implements PipeTransform {

  transform(value:number):string {
    let applyWayName:string;
    switch(value){
      case 0:applyWayName="微信支付";break;
      case 1:applyWayName="银联支付";break;
      case 2:applyWayName="支付宝支付";break;
      case 3:applyWayName="其他支付";break;
      default:applyWayName="未匹配";break;
    }
    return applyWayName;
  }

}
