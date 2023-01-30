import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanDeTrabajo } from './plan-de-trabajo';
import { PlanDeTrabajoService } from './plan-de-trabajo.service';

@Component({
  selector: 'app-plan-de-trabajo',
  templateUrl: './plan-de-trabajo.component.html',
  styleUrls: ['./plan-de-trabajo.component.css']
})
export class PlanDeTrabajoComponent implements OnInit {

  constructor(
    private planDeTrabajoService: PlanDeTrabajoService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: PlanDeTrabajo =
  {
    planTrabajoId: 0,
    descripcionGe: "",
    objetivoPro: "",
    analisisSi: "",
    justificacion: "",
    numObjetivos: "",
    nombreOb: "",
    objetivoOb: "",
    indicadorOb: "",
    metodosOb: "",
    numCriterios: "",
    nombreCriterios: "",
    criterioCriterios: "",
    objetivosEs: "",
    indicadoresVe: "",
    mediosVe: "",
    conclusiones: "",
    recomendaciones: ""
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
    this.planDeTrabajoService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          planTrabajoId: 0,
          descripcionGe: "",
          objetivoPro: "",
          analisisSi: "",
          justificacion: "",
          numObjetivos: "",
          nombreOb: "",
          objetivoOb: "",
          indicadorOb: "",
          metodosOb: "",
          numCriterios: "",
          nombreCriterios: "",
          criterioCriterios: "",
          objetivosEs: "",
          indicadoresVe: "",
          mediosVe: "",
          conclusiones: "",
          recomendaciones: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.planDeTrabajoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}

