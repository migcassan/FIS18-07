import { Component, OnInit } from '@angular/core';

import { presupuestos as presupuesto } from '../shared/presupuestos';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  presupuestoList: presupuesto[];
  
  selectedContact: presupuesto;
  newPresupuesto: presupuesto = {
    name: null,
    category: null,
    amount: null,
    quantity: null
  };

  addPrep() {
    this.presupuestoList.push(this.newPresupuesto);
    this.newPresupuesto = {
      name: null,
      category: null,
      amount: null,
      quantity: null
    }
  }

  getbuget() {
    this.userService.getPresupuesto()
      .subscribe((PRESUPUESTOS) => {
        this.presupuestoList = PRESUPUESTOS;  
      });
  }

  ngOnInit() {
    this.getbuget();
  }


  // presupuestos: presupuestos[];
  // seletedPresupuesto: presupuestos;
  // newPresupuesto: presupuestos = {
  //   name: null,
  //   category: null,
  //   amount: null,
  //   quantity: null
  // };
  constructor(private userService: UserService, private router: Router) { }
  onLogout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }

}
