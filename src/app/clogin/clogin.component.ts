import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clogin } from './clogin';
import { CloginService } from './clogin.service';

@Component({
  selector: 'app-clogin',
  templateUrl: './clogin.component.html',
  styleUrls: ['./clogin.component.css']
})
export class CloginComponent implements OnInit {
  constructor(private loginserv: CloginService, private rout: Router) { }
  isvalid = false;
  userinfo = { username: '', password: '' };
  ngOnInit() {
  }
  onSubmit(frm) {

    const user: Clogin = { username: frm.value.username, password: frm.value.password };

    if (this.loginserv.login(user)) {
      this.rout.navigate(['/user']);
    } else {
      this.isvalid = true;
    }
    console.log(frm);
  }
}
