import {CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

//路由守卫 状态
@Injectable()
export class DefendGuard implements CanActivate{
  constructor(
    private router:Router,
    private cookieService:CookieService
  ){}
  canActivate():boolean{
      var userId=this.cookieService.get("userId");
      if(!userId){
          console.log("not exist")
          this.router.navigate(['./routemain/defendRoute/routeLogin']);
          return false;
      }
      return true;
  }
}

