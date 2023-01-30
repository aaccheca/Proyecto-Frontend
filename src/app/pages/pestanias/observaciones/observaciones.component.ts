import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observaciones } from './observaciones';
import { ObservacionesService } from './observaciones.service';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.css']
})
export class ObservacionesComponent implements OnInit {

  constructor(
    private observacionesService: ObservacionesService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Observaciones =
  {
          observacionesId: 0,
          estado: "",
          observacioness: ""
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
    this.observacionesService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          observacionesId: 0,
          estado: "",
          observacioness: ""
        };
      }
    )
  }

  findById(id: number):void {
    this.observacionesService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

}
