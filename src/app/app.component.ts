import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//,
  // template: ''
})
export class AppComponent {
  title = 'PRESUPUESTOS';

  team = 'MC, FA & XL';

  onLogin() {

    alert("intento entrar");  

   }
}