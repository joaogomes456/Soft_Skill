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
    path: 'definicao',
    loadChildren: () => import('./soft_skills/definicao/definicao.module').then( m => m.DefinicaoPageModule)
  },
  {
    path: 'int-emocional',
    loadChildren: () => import('./soft_skills/int-emocional/int-emocional.module').then( m => m.IntEmocionalPageModule)
  },
  {
    path: 'empatia',
    loadChildren: () => import('./soft_skills/empatia/empatia.module').then( m => m.EmpatiaPageModule)
  },
  {
    path: 'orga-plan',
    loadChildren: () => import('./soft_skills/orga-plan/orga-plan.module').then( m => m.OrgaPlanPageModule)
  },
  {
    path: 'lideranca',
    loadChildren: () => import('./soft_skills/lideranca/lideranca.module').then( m => m.LiderancaPageModule)
  },
  {
    path: 'etica',
    loadChildren: () => import('./soft_skills/etica/etica.module').then( m => m.EticaPageModule)
  },
  {
    path: 'pen-criativo',
    loadChildren: () => import('./soft_skills/pen-criativo/pen-criativo.module').then( m => m.PenCriativoPageModule)
  },
  {
    path: 'trab-pressao',
    loadChildren: () => import('./soft_skills/trab-pressao/trab-pressao.module').then( m => m.TrabPressaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
