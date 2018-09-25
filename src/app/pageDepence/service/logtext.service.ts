import { Injectable } from '@angular/core';

@Injectable()
export class LogtextService {
  constructor() {}
  public log(text):string{
      return text;
  }
}
