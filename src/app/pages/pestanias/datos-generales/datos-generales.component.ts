import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosGenerales } from './datos-generales';
import { DatosGeneralesService } from './datos-generales.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css'],
})
export class DatosGeneralesComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }
  currentEntity: DatosGenerales = {
    dgId: 0,
    codigo: 0,
    nombrep: '',
    nombrei: '',
    ciclo: '',
    cobertura: '',
    carreraId: 1,
    modalidadId: 1,
    fecha: '',
    plazo: '',
    financiamiento: '',
    vigencia: '',
    fechaPresentacion: '',
    fechaInicio: '',
    fechaFinal: '',
  };

  datosGeneralesForm = this.fb.group({
    codigoProyecto: [
      this.currentEntity.codigo,
      [Validators.required, Validators.pattern('[ñáéíóúA-Za-z ]+')],
    ],
    nombreProyecto: [
      this.currentEntity.nombrep,
      [Validators.required, Validators.pattern('[ñáéíóúA-Za-z ]+')],
    ],
    nombreInstituto: [this.currentEntity.nombrei, [Validators.required]],
    ciclo: [this.currentEntity.ciclo, [Validators.required]],
    coberturaLocalizacion: [
      this.currentEntity.cobertura,
      [Validators.required, Validators.pattern('[ñáéíóúA-Za-z ]+')],
    ],
    carrera: [this.currentEntity.carreraId, [Validators.required]],
    modalidad: this.fb.group({
      modalidadRadio: ["1"],
    }),
    fecha: [this.currentEntity.fecha, [Validators.required]],
    plazoEjecucion: [this.currentEntity.plazo, [Validators.required]],
    financiamiento: [this.currentEntity.financiamiento, [Validators.required]],
    plazoVigenciaConvenio: [this.currentEntity.vigencia, [Validators.required]],
    fechaPresentacion: [
      this.currentEntity.fechaPresentacion,
      [Validators.required],
    ],
    fechaInicio: [this.currentEntity.fechaInicio, [Validators.required]],
    fechaFinal: [this.currentEntity.fechaFinal, [Validators.required]],
  });

  onSubmit() {
    console.warn(this.datosGeneralesForm.value);
    console.table(this.currentEntity);
    this.datosGeneralesService.save(this.currentEntity).subscribe(() => {
      this.currentEntity = {
        dgId: 0,
        codigo: 0,
        nombrep: '',
        nombrei: '',
        ciclo: '',
        cobertura: '',
        carreraId: 0,
        modalidadId: 2,
        fecha: '',
        plazo: '',
        financiamiento: '',
        vigencia: '',
        fechaPresentacion: '',
        fechaInicio: '',
        fechaFinal: '',
      };
    });
  }

  get codigoProyecto() {
    return this.datosGeneralesForm.get('codigoProyecto');
  }
  get nombreProyecto() {
    return this.datosGeneralesForm.get('nombreProyecto');
  }

  get nombreInstituto() {
    return this.datosGeneralesForm.get('nombreInstituto');
  }

  get ciclo() {
    return this.datosGeneralesForm.get('ciclo');
  }

  get coberturaLocalizacion() {
    return this.datosGeneralesForm.get('coberturaLocalizacion');
  }

  get carrera() {
    return this.datosGeneralesForm.get('carrera');
  }

  get modalidad() {
    return this.datosGeneralesForm.get('modalidad');
  }

  get fecha() {
    return this.datosGeneralesForm.get('fecha');
  }

  get plazoEjecucion() {
    return this.datosGeneralesForm.get('plazoEjecucion');
  }

  get financiamiento() {
    return this.datosGeneralesForm.get('financiamiento');
  }

  get plazoVigenciaConvenio() {
    return this.datosGeneralesForm.get('plazoVigenciaConvenio');
  }

  get fechaPresentacion() {
    return this.datosGeneralesForm.get('fechaPresentacion');
  }

  get fechaInicio() {
    return this.datosGeneralesForm.get('fechaInicio');
  }

  get fechaFinal() {
    return this.datosGeneralesForm.get('fechaFinal');
  }

  findById(id: number): void {
    this.datosGeneralesService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }

  constructor(
    private fb: FormBuilder,
    private datosGeneralesService: DatosGeneralesService,
    private activatedRoute: ActivatedRoute
  ) {}
}
