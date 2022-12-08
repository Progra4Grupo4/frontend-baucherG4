import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/api/models';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
    empleado:Empleado[]=[]

    constructor(){}

    ngOnInit(): void{

    }
}
