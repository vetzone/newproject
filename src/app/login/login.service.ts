import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(user: Login) {
    if (user.password === 'hamada539327' && user.username === 'ahmed') {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }
}
