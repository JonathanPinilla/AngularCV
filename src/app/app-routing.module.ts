import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {FamilyReferencesComponent} from "./pages/family-references/family-references.component";
import {PersonalReferencesComponent} from "./pages/personal-references/personal-references.component";
import {StudiesComponent} from "./pages/studies/studies.component";
import {ExpereinceComponent} from "./pages/expereince/expereince.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'family-references',
    component: FamilyReferencesComponent
  },
  {
    path: 'personal-references',
    component: PersonalReferencesComponent
  },
  {
    path: 'studies',
    component: StudiesComponent
  },
  {
    path: 'experience',
    component: ExpereinceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
