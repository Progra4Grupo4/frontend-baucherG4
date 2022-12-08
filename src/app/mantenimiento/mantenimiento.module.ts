import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { BaucherComponent } from './baucher/baucher.component';
import { DetallebaucherComponent } from './detallebaucher/detallebaucher.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    EmpleadoComponent,
    BaucherComponent,
    DetallebaucherComponent,
    CuentaComponent
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class MantenimientoModule { }
