import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from "./features/home/pages/page-home/page-home.component";

const routes: Routes = [
  {
    path: '', component: PageHomeComponent
  },
  {
    path: 'calculators', loadChildren: () => import('./features/calculators/calculators.module')
      .then(m => m.CalculatorsModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
