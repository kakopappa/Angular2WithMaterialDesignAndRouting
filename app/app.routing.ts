import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
 

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'first' },
{ path: 'first', component: FirstComponent },
{ path: 'second', component: SecondComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [FirstComponent, SecondComponent];