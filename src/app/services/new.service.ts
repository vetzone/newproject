import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor() { }
  login(name , password)
  {
    if(name=="admin" && password=="admin")

    {
      alert("login successfully!");
    }else{
      alert("login successfully!");
    }
  }
}
