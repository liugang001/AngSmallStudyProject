import {Injectable} from '@angular/core';

/*
* 定义汽车的轮子
* */
@Injectable()
export class Wheel {
    private wheelName:string="大齿轮";
    private wheelColor:string="black";
    public setWheel(){
        console.log(this.wheelName+"--"+this.wheelColor+" install ");
    }
}
