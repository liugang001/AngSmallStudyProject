import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoggingService {
  public log():void{
      console.log('loginning common about ME')
  }
  constructor(private Http:HttpClient) {}
  public getJsonData(){
      return this.Http.get("./assets/fake/data.json")
  }
}
