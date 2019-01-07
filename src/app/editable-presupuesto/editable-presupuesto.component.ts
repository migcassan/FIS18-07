import { Component, OnInit, Input } from '@angular/core';
import { presupuestos } from '../shared/presupuestos';

@Component({
  selector: '[app-editable-presupuesto]',
  templateUrl: './editable-presupuesto.component.html',
  styleUrls: ['./editable-presupuesto.component.css']
})
export class EditablePresupuestoComponent implements OnInit {

  @Input() presupuestoParam: presupuestos;

  editable = false;

  constructor() { }

  onEdit() {
    this.editable = !this.editable;
  }

  onDelete() {
    alert('delete');
  }

  ngOnInit() {
  }

}
