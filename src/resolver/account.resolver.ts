import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Injectable()
export class RouteResolver implements Resolve<any> {
  constructor(public userService: UserService) {}

  resolve() {
    return this.userService.getUserById(1);
  }
}
