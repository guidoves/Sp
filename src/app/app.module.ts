import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModuloExterno } from './modulo.externo';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/admin/users/users.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { StatisticsComponent } from './components/admin/statistics/statistics.component';
import { FormComponent } from './components/admin/users/form/form.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AltaservicioComponent } from './components/home/altaservicio/altaservicio.component';

import { DolarPipe } from './pipes/dolar.pipe';
import { MegaPipe } from './pipes/megabyte.pipe';
import { SexoDirective } from './directives/sexo.directive';
import { TablaclientesComponent } from './components/tablaclientes/tablaclientes.component';
import { ServidoresComponent } from './components/servidores/servidores.component';
import { BdComponent } from './components/bd/bd.component';
import { StorageComponent } from './components/storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    OrdersComponent,
    StatisticsComponent,
    FormComponent,
    FormularioComponent,
    LoginComponent,
    HomeComponent,
    AltaservicioComponent,
    DolarPipe,
    MegaPipe,
    SexoDirective,
    TablaclientesComponent,
    ServidoresComponent,
    BdComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    ModuloExterno,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
