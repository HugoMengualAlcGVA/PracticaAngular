import { Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio-component/inicio-component';
import { TablaComponent } from './Components/tabla-component/tabla-component';
import { articulosComponent } from './Components/articulos-component/articulos-component';
import { FetchComponent } from './Components/fetch-component/fetch-component';
import { ErrorComponent } from './Components/error-component/error-component';
import { HtttpClientComponent } from './Components/htttp-client-component/htttp-client-component';

export const routes: Routes = [
    {path: '', component:InicioComponent },
    {path: 'inicio', component:InicioComponent },
    {path:'tabla', component:TablaComponent },
    {path:'articulos', component:articulosComponent },
    {path:'fetch', component:FetchComponent },
    {path:'articulosHttp', component:HtttpClientComponent },
    {path: '**', component: ErrorComponent},
];
