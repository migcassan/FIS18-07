import { Component, OnInit, Input } from '@angular/core';
import { presupuestos } from '../shared/presupuestos';
import { UserService } from '../shared/user.service';

@Component({
  selector: '[app-editable-presupuesto]',
  templateUrl: './editable-presupuesto.component.html',
  styleUrls: ['./editable-presupuesto.component.css']
})
export class EditablePresupuestoComponent implements OnInit {

  @Input() presupuestoParam: presupuestos;

  editable = false;
  oldName = '';

  constructor(private userService: UserService) { }

  onEdit() {

    this.editable = !this.editable;
    if (this.editable) {
      this.oldName = (this.presupuestoParam.name);
    } else {
      // alert('guardando !' + JSON.stringify(this.presupuestoParam));
      //update
      this.userService.updatePresupuesto(this.oldName, this.presupuestoParam).subscribe(
        res => {
          alert(res);
          location.reload();
        },
        err => {
          if (err.status === 422) {
            alert(err);
          }
          else
            console.log('Algo salió mal. Por favor, póngase en contacto con el administrador.');
        }
      );
    }

  }

  onDelete() {
    this.userService.deletePresupuesto(this.presupuestoParam).subscribe(
      res => {
        alert(res);
        location.reload();
     },
      err => {
        if (err.status === 422) {
          console.log(err);
        }
        else
          console.log('Algo salió mal. Por favor, póngase en contacto con el administrador.');
      }
    );
  }

  ngOnInit() {
  }

}
