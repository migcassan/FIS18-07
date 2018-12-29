import { Component, OnInit } from '@angular/core';
import { presupuestos } from '../presupuestos';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  presupuesto: presupuestos = {
    name: "conferencia en madrid",
    category: "viaje",
    amount: 250
  };

  constructor() { }

  ngOnInit() {
  }

}
