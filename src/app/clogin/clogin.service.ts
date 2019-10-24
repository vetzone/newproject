import { Injectable } from '@angular/core';
import { Clogin } from './clogin';

@Injectable({
  providedIn: 'root'
})
export class CloginService {
  login(user: Clogin) {
    if (user.password === 'hamada539327' && user.username === 'ahmed') {
      return true;
    } else {
      return false;
    }
  }
    constructor() { }
}
