import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observaciones } from './observaciones';
import { ObservacionesService } from './observaciones.service';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrls: ['./observaciones.component.css'],
})
export class ObservacionesComponent implements OnInit {
  constructor(
    private observacionesService: ObservacionesService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  currentEntity: Observaciones = {
    observacionesId: 0,
    estado: '',
    observaciones: '',
  };

  observacionesForm = this.fb.group({
    estado: this.fb.group({
      estadoRadio: [this.currentEntity.estado, [Validators.required]],
    }),
    observaciones: [this.currentEntity.observaciones, [Validators.required]],
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  onSubmit(): void {
    console.table(this.currentEntity);
    this.observacionesService.save(this.observacionesForm.value as Observaciones).subscribe(() => {
      this.currentEntity = {
        observacionesId: 0,
        estado: '',
        observaciones: '',
      };
    });
  }

  get estado() {
    return this.observacionesForm.get('estado');
  }

  get observaciones() {
    return this.observacionesForm.get('observaciones');
  }

  get estadoRadio() {
    return this.observacionesForm.get('estado')?.value.estadoRadio;
  }

  findById(id: number): void {
    this.observacionesService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }
}
