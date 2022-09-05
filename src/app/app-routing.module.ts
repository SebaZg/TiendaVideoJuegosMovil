import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista-juegos',
    loadChildren: () => import('./lista-juegos/lista-juegos.module').then( m => m.ListaJuegosPageModule)
  },
  {
    path: 'consolas',
    loadChildren: () => import('./consolas/consolas.module').then( m => m.ConsolasPageModule)
  },
  {
    path: 'figuras',
    loadChildren: () => import('./figuras/figuras.module').then( m => m.FigurasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
