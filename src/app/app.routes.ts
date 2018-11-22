import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { TablaclientesComponent } from './components/tablaclientes/tablaclientes.component';
import { BdComponent } from './components/bd/bd.component';
import { ServidoresComponent } from './components/servidores/servidores.component';
import { StorageComponent } from './components/storage/storage.component';

const ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'clientes', component: TablaclientesComponent },
    { path: 'bd', component: BdComponent },
    { path: 'servidores', component: ServidoresComponent },
    { path: 'storage', component: StorageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
