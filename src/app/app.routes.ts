import { Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio-component/inicio-component';
import { TablaComponent } from './Components/tabla-component/tabla-component';

export const routes: Routes = [
    {path: '', component:InicioComponent },
    {path: 'inicio', component:InicioComponent },
    {path:'articulos', component:TablaComponent },
];
