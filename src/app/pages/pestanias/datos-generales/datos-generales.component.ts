import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosGenerales } from './datos-generales';
import { DatosGeneralesService } from './datos-generales.service';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {

  constructor(
    private datosGeneralesService: DatosGeneralesService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: DatosGenerales =
  {
          dgId: 0,
          codigo: 0,
          nombrep: "",
          nombrei: "",
          ciclo: "",
          cobertura: "",
          carreraId: 1,
          modalidadId: 1,
          fecha: "",
          plazo: "",
          financiamiento: "",
          vigencia: "",
          fechaPresentacion: "",
          fechaInicio: "",
          fechaFinal: ""
  };

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.datosGeneralesService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          dgId: 0,
          codigo: 0,
          nombrep: "",
          nombrei: "",
          ciclo: "",
          cobertura: "",
          carreraId: 0,
          modalidadId: 2,
          fecha: "",
          plazo: "",
          financiamiento: "",
          vigencia: "",
          fechaPresentacion: "",
          fechaInicio: "",
          fechaFinal: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.datosGeneralesService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
