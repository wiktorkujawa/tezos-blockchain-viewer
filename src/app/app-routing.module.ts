import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './modules/public/components/about/components/about-page/about-page.component';
import { LayoutComponent } from './modules/public/layout/layout.component';

const routes: Routes = [
  { path: '',
     component: LayoutComponent,
     children: [
      {
        path: 'transactions',
        loadChildren: () => import('./modules/public/components/transaction/transaction.module').then(m => m.TransactionModule)
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
