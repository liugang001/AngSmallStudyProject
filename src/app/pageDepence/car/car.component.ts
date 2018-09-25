import {Component,Injector, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Car} from '../part/car';
import {Engine} from '../part/engine';
import {Wheel} from '../part/wheel';
import {Seat} from '../part/seat';
import {Mirror} from '../part/mirror';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[Car, Engine, Mirror, Seat,Wheel]
})

@Injectable()
export class CarComponent implements OnInit {

  private MirrorName:string;
  constructor(private inject:Injector) {
      let car=inject.get(Car);
      this.MirrorName=car.run();
  }

  ngOnInit() {}

}
