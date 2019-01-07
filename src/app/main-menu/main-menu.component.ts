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

  constructor(private userService: UserService, private router: Router) { }

  presupuestoList: presupuesto[];
  selectedContact: presupuesto;
  newPresupuesto: presupuesto = {
    name: null,
    category: null,
    amount: null,
    quantity: null
  };

  addPrep() {
    //quitar el espacio blanco al final antes de guardar
    this.userService.postPresupuesto(this.newPresupuesto).subscribe(
      res => {
        alert('Entrada procesada correctamente');
        this.presupuestoList.push(this.newPresupuesto);
        this.newPresupuesto = {
          name: null,
          category: null,
          amount: null,
          quantity: null
        }
      },
      err => {
        if (err.status === 422) {
          alert('Algo salió mal. Por favor, póngase en contacto con el administrador.');
        }
        else
          alert(JSON.stringify(err));
      }
    );
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

  onLogout() {
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }

}
