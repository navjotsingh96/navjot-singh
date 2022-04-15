import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'my-work', component: MyWorkComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'contact-me', component: ContactMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
