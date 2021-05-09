import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'simounao',
    loadChildren: () => import('./simounao/simounao.module').then( m => m.SimounaoPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'usuarios-github',
    loadChildren: () => import('./usuarios-github/usuarios-github.module').then( m => m.UsuariosGithubPageModule)
  },  {
    path: 'detalhes',
    loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'bitcoin',
    loadChildren: () => import('./bitcoin/bitcoin.module').then( m => m.BitcoinPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
