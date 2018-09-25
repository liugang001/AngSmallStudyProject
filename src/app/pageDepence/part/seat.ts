import {Injectable} from '@angular/core';

/*
* 定义汽车的座位
* */
@Injectable()
export class Seat {
    public seatFeel(){
        console.log("汽车的这个位置真舒服...");
    }
}
