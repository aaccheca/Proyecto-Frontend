import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from './empresa';
import { EmpresaService } from './empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  constructor(
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  currentEntity: Empresa = {
    empresaId: 0,
    nombreE: '',
    entidadId: 1,
    personaAc: '',
    numRuc: '',
    actividadEc: '',
    correoE: '',
    telfCo: '',
    parroquiaMa: '',
    provinciaMa: '',
    cantonMa: '',
    direccionMa: '',
    parroquiaSu: '',
    provinciaSu: '',
    cantonSu: '',
    direccionSu: '',
    numEE: '',
    totalEE: '',
    lugarU: '',
    beneficiariosDi: '',
    beneficiariosIndi: '',
  };

  empresaForm = this.fb.group({
    nombreE: [this.currentEntity.nombreE, [Validators.required]],
    personaAc: [this.currentEntity.personaAc, [Validators.required]],
    naturaleza: this.fb.group({
      naturalezaType: ['publica', [Validators.required]],
    }),
    numRuc: [this.currentEntity.numRuc, [Validators.required]],
    actividadEc: [this.currentEntity.actividadEc, [Validators.required]],
    correoE: [this.currentEntity.correoE, [Validators.required]],
    telfCo: [this.currentEntity.telfCo, [Validators.required]],
    parroquiaMa: [this.currentEntity.parroquiaMa, [Validators.required]],
    provinciaMa: [this.currentEntity.provinciaMa, [Validators.required]],
    cantonMa: [this.currentEntity.cantonMa, [Validators.required]],
    direccionMa: [this.currentEntity.direccionMa, [Validators.required]],
    parroquiaSu: [this.currentEntity.parroquiaSu, [Validators.required]],
    provinciaSu: [this.currentEntity.provinciaSu, [Validators.required]],
    cantonSu: [this.currentEntity.cantonSu, [Validators.required]],
    direccionSu: [this.currentEntity.direccionSu, [Validators.required]],
    numEE: [this.currentEntity.numEE, [Validators.required]],
    totalEE: [this.currentEntity.totalEE, [Validators.required]],
    lugarU: [this.currentEntity.lugarU, [Validators.required]],
    beneficiariosDi: [
      this.currentEntity.beneficiariosDi,
      [Validators.required],
    ],
    beneficiariosIndi: [
      this.currentEntity.beneficiariosIndi,
      [Validators.required],
    ],
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
  }

  onSubmit() {
    console.warn(this.empresaForm.value);
    console.table(this.currentEntity);
    this.empresaService
      .save(this.empresaForm.value as Empresa)
      .subscribe(() => {
        this.currentEntity = {
          empresaId: 0,
          nombreE: '',
          entidadId: 1,
          personaAc: '',
          numRuc: '',
          actividadEc: '',
          correoE: '',
          telfCo: '',
          parroquiaMa: '',
          provinciaMa: '',
          cantonMa: '',
          direccionMa: '',
          parroquiaSu: '',
          provinciaSu: '',
          cantonSu: '',
          direccionSu: '',
          numEE: '',
          totalEE: '',
          lugarU: '',
          beneficiariosDi: '',
          beneficiariosIndi: '',
        };
      });
  }

  findById(id: number): void {
    this.empresaService.findById(id).subscribe((response) => {
      this.currentEntity = response;
    });
  }
  get nombreE() {
    return this.empresaForm.get('nombreE');
  }
  get personaAc() {
    return this.empresaForm.get('personaAc');
  }
  get naturaleza() {
    return this.empresaForm.get('naturaleza');
  }
  get naturalezaType() {
    return this.naturaleza?.get('naturalezaType');
  }
  get numRuc() {
    return this.empresaForm.get('numRuc');
  }
  get actividadEc() {
    return this.empresaForm.get('actividadEc');
  }
  get correoE() {
    return this.empresaForm.get('correoE');
  }
  get telfCo() {
    return this.empresaForm.get('telfCo');
  }
  get parroquiaMa() {
    return this.empresaForm.get('parroquiaMa');
  }
  get provinciaMa() {
    return this.empresaForm.get('provinciaMa');
  }
  get cantonMa() {
    return this.empresaForm.get('cantonMa');
  }
  get direccionMa() {
    return this.empresaForm.get('direccionMa');
  }
  get parroquiaSu() {
    return this.empresaForm.get('parroquiaSu');
  }
  get provinciaSu() {
    return this.empresaForm.get('provinciaSu');
  }
  get cantonSu() {
    return this.empresaForm.get('cantonSu');
  }
  get direccionSu() {
    return this.empresaForm.get('direccionSu');
  }
  get numEE() {
    return this.empresaForm.get('numEE');
  }
  get totalEE() {
    return this.empresaForm.get('totalEE');
  }
  get lugarU() {
    return this.empresaForm.get('lugarU');
  }
  get beneficiariosDi() {
    return this.empresaForm.get('beneficiariosDi');
  }
  get beneficiariosIndi() {
    return this.empresaForm.get('beneficiariosIndi');
  }
}
