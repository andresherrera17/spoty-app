import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'user/login' },
  { path: '**', pathMatch: 'full', redirectTo: 'user/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
