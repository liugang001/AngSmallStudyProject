import {Injectable} from '@angular/core';
import {Engine} from './engine';
import {Mirror} from './mirror';
import {Seat} from './seat';
import {Wheel} from './wheel';

@Injectable()
export class Car{
    //依赖注入-------
    constructor(
        private engine:Engine,
        private mirror:Mirror,
        private seat:Seat,
        private wheel:Wheel
    ){}

    //定义奔跑方法----
    public run():string{
       this.engine.start();
       this.seat.seatFeel();
       this.wheel.setWheel();
       return this.mirror.MirrorName;
    }

}
