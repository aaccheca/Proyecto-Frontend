import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Empresa =
  {
    empresaId: 0,
    nombreE: "",
    entidadId: 1,
    personaAc: "",
    numRuc: "",
    actividadEc: "",
    correoE: "",
    telfCo: "",
    parroquiaMa: "",
    provinciaMa: "",
    cantonMa: "",
    direccionMa: "",
    parroquiaSu: "",
    provinciaSu: "",
    cantonSu: "",
    direccionSu: "",
    numEE: "",
    totalEE: "",
    lugarU: "",
    beneficiariosDi: "",
    beneficiariosIndi: ""
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
    this.empresaService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          empresaId: 0,
          nombreE: "",
          entidadId: 1,
          personaAc: "",
          numRuc: "",
          actividadEc: "",
          correoE: "",
          telfCo: "",
          parroquiaMa: "",
          provinciaMa: "",
          cantonMa: "",
          direccionMa: "",
          parroquiaSu: "",
          provinciaSu: "",
          cantonSu: "",
          direccionSu: "",
          numEE: "",
          totalEE: "",
          lugarU: "",
          beneficiariosDi: "",
          beneficiariosIndi: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.empresaService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
