import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../shared/main/main.component';
import { AgregarRolComponent } from './coordinador-carrera/agregar-rol/agregar-rol.component';
import { ListaEstudiantesComponent } from './coordinador-carrera/lista-estudiantes/lista-estudiantes.component';
import { ListaPortafoliosComponent } from './coordinador-carrera/lista-portafolios/lista-portafolios.component';
import { RedireccionarComponent } from './coordinador-carrera/redireccionar/redireccionar.component';
import { RellenarDatosComponent } from './coordinador-carrera/rellenar-datos/rellenar-datos.component';
import { ListaEstudiantesGeneralComponent } from './coordinador-general/lista-estudiantes-general/lista-estudiantes-general.component';
import { PortafolioComponent } from './coordinador-general/portafolio/portafolio.component';
import { SolicitudCertificadoComponent } from './coordinador-general/solicitud-certificado/solicitud-certificado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularioFinalTutorComponent } from './docente-tutor/formulario-final-tutor/formulario-final-tutor.component';
import { PortafolioVinculacionComponent } from './docente-vinculacion/portafolio-vinculacion/portafolio-vinculacion.component';
import { SolicitudFormComponent } from './docente-vinculacion/solicitud-vinculacion/solicitud-form/solicitud-form.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { EstudiantePortafolioComponent } from './estudiante/estudiante-portafolio/estudiante-portafolio.component';
import { EstudianteComponent } from './estudiante/estudiante/estudiante.component';
import { InformeFinalEstudianteComponent } from './estudiante/informe-final-estudiante/informe-final-estudiante.component';
import { AvanceCumplimientoComponent } from './informe-control/avance-cumplimiento/avance-cumplimiento.component';
import { InformeControlComponent } from './informe-control/informe-control/informe-control.component';
import { ObservacionAvanceComponent } from './informe-control/observacion-avance/observacion-avance.component';
import { InformeInicialComponent } from './informe-inicial/informe-inicial/informe-inicial.component';
import { PrimerFormularioInicialComponent } from './informe-inicial/primer-formulario-inicial/primer-formulario-inicial.component';
import { SegundoFormularioInicialComponent } from './informe-inicial/segundo-formulario-inicial/segundo-formulario-inicial.component';
import { ProyectoFormComponent } from './docente-vinculacion/proyecto-vinculacion/proyecto-form/proyecto-form.component';
import { AsignarFundacionFormComponent } from './docente-vinculacion/asignar-fundacion-vinculacion/asignar-fundacion-form/asignar-fundacion-form.component';
import { ConfiguracionVinculacionFormComponent } from './docente-vinculacion/configuracion-vinculacion/configuracion-vinculacion-form/configuracion-vinculacion-form.component';
import { PortafolioTutorFormularioComponent } from './docente-tutor/portafolio-tutor/portafolio-tutor-formulario/portafolio-tutor-formulario.component';
import { ListaFundacionTutorFromComponent } from './docente-tutor/lista-fundacion-tutor/lista-fundacion-tutor-from/lista-fundacion-tutor-from.component';
import { ListaEstudianteTutorFormComponent } from './docente-tutor/lista-estudiantes-tutor/lista-estudiante-tutor-form/lista-estudiante-tutor-form.component';
import { ActividadesComponent } from './pestanias/actividades/actividades.component';
import { AnexosComponent } from './pestanias/anexos/anexos.component';
import { BibliografiaComponent } from './pestanias/bibliografia/bibliografia.component';
import { CertificadosComponent } from './pestanias/certificados/certificados.component';
import { DatosGeneralesComponent } from './pestanias/datos-generales/datos-generales.component';
import { DocumentosComponent } from './pestanias/documentos/documentos.component';
import { EmpresaComponent } from './pestanias/empresa/empresa.component';
import { FirmasComponent } from './pestanias/firmas/firmas.component';
import { IntegrantesComponent } from './pestanias/integrantes/integrantes.component';
import { ObservacionesComponent } from './pestanias/observaciones/observaciones.component';
import { PlanDeTrabajoComponent } from './pestanias/plan-de-trabajo/plan-de-trabajo.component';
import { MenuComponent } from './pestanias/menu/menu.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'solicitud', component: SolicitudFormComponent },
      { path: 'asignar-fundacion', component: AsignarFundacionFormComponent },
      { path: 'configuraciones', component: ConfiguracionVinculacionFormComponent },
      { path: 'portafolio-vinculacion', component: PortafolioVinculacionComponent },
      { path: 'proyecto', component: ProyectoFormComponent},


      { path: 'agregar-rol', component: AgregarRolComponent },
      { path: 'lista-estudiantes', component: ListaEstudiantesComponent },
      { path: 'lista-portafolios', component: ListaPortafoliosComponent },
      { path: 'redireccionar', component: RedireccionarComponent },
      { path: 'rellenar-datos', component: RellenarDatosComponent },

      { path: 'lista-estudiantes-general', component: ListaEstudiantesGeneralComponent },
      { path: 'portafolio', component: PortafolioComponent },
      { path: 'solicitud-certificado', component: SolicitudCertificadoComponent },

      { path: 'portafolio-tutor', component: PortafolioTutorFormularioComponent },
      { path: 'lista-fundacion-tutor', component: ListaFundacionTutorFromComponent },
      { path: 'lista-estudiante-tutor', component: ListaEstudianteTutorFormComponent },



      { path: 'estudiante', component: EstudianteComponent },
      { path: 'estudiante-portafolio', component: EstudiantePortafolioComponent },

      { path: 'avance-cumplimiento', component: AvanceCumplimientoComponent },
      { path: 'informe-control', component: InformeControlComponent },
      { path: 'observacion-avance', component: ObservacionAvanceComponent },

      { path: 'informe-inicial', component: InformeInicialComponent },
      { path: 'primer-formulario-inicial', component: PrimerFormularioInicialComponent },
      { path: 'segundo-formulario-inicial', component: SegundoFormularioInicialComponent },
      { path: 'formulario-final-tutor', component: FormularioFinalTutorComponent },
      { path: 'informe-final-estudiante', component: InformeFinalEstudianteComponent },

      { path: 'actividades', component: ActividadesComponent},
      { path: 'actividades/:id', component: ActividadesComponent},
      { path: 'anexos', component: AnexosComponent},
      { path: 'anexos/:id', component: AnexosComponent},
      { path: 'bibliografia', component: BibliografiaComponent},
      { path: 'bibliografia/:id', component: BibliografiaComponent},
      { path: 'certificados', component: CertificadosComponent},
      { path: 'certificados/:id', component: CertificadosComponent},
      { path: 'datos-generales', component: DatosGeneralesComponent},
      { path: 'datos-generales/:id', component: DatosGeneralesComponent},
      { path: 'documentos', component: DocumentosComponent},
      { path: 'documentos/:id', component: DocumentosComponent},
      { path: 'empresa', component: EmpresaComponent},
      { path: 'empresa/:id', component: EmpresaComponent},
      { path: 'firmas', component: FirmasComponent},
      { path: 'firmas/:id', component: FirmasComponent},
      { path: 'integrantes', component: IntegrantesComponent},
      { path: 'integrantes/:id', component: IntegrantesComponent},
      { path: 'observaciones', component: ObservacionesComponent},
      { path: 'observaciones/:id', component: ObservacionesComponent},
      { path: 'plan-de-trabajo', component: PlanDeTrabajoComponent},
      { path: 'plan-de-trabajo/:id', component: PlanDeTrabajoComponent},
      { path: 'menu-proyecto', component: MenuComponent},

      { path: 'encuesta', component: EncuestaComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
