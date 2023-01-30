import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Integrantes } from './integrantes';
import { IntegrantesService } from './integrantes.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {

  constructor(
    private integrantesService: IntegrantesService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Integrantes =
  {
      integrantesId: 0,
      numProyecto: "",
      nombreProyecto: "",
      horarioProyecto: "",
      cargoProyecto: "",
      funcionesProyecto: "",
      numEstudiantes: "",
      nombreEstudiantes: "",
      cedulaEstudiantes: "",
      especialidadEstudiantes: "",
      funcionesEstudiantes: "",
      numDocente: "",
      nombreDocente: "",
      horarioDocente: "",
      funcionesDocente: "",
      numInstitucion: "",
      nombreInstitucion: "",
      cargoInstitucion: "",
      funcionesInstitucion: "",
      numEmpresarial: "",
      nombreEmpresarial: "",
      telfEmpresarial: "",
      cargoEmpresarial: ""
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
    this.integrantesService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          integrantesId: 0,
          numProyecto: "",
          nombreProyecto: "",
          horarioProyecto: "",
          cargoProyecto: "",
          funcionesProyecto: "",
          numEstudiantes: "",
          nombreEstudiantes: "",
          cedulaEstudiantes: "",
          especialidadEstudiantes: "",
          funcionesEstudiantes: "",
          numDocente: "",
          nombreDocente: "",
          horarioDocente: "",
          funcionesDocente: "",
          numInstitucion: "",
          nombreInstitucion: "",
          cargoInstitucion: "",
          funcionesInstitucion: "",
          numEmpresarial: "",
          nombreEmpresarial: "",
          telfEmpresarial: "",
          cargoEmpresarial: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.integrantesService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
