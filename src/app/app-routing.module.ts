import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about/components/about-page/about-page.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '',
     component: LayoutComponent,
     children: [
      {
        path: 'transactions',
        loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
      },
      {
        path: '', component: AboutPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
