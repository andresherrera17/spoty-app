import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedTo }
  },
  {
    path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule), canActivate: [AuthGuard]
  },
  { path: '', pathMatch: 'full', redirectTo: 'user/login' },
  { path: '**', pathMatch: 'full', redirectTo: 'user/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
