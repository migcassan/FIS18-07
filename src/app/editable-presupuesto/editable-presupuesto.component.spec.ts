import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditablePresupuestoComponent } from './editable-presupuesto.component';

describe('EditablePresupuestoComponent', () => {
  let component: EditablePresupuestoComponent;
  let fixture: ComponentFixture<EditablePresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditablePresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditablePresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
