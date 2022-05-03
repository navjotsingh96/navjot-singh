import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectComponent } from './data-protect/data-protect.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protect', component: DataProtectComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Restore the last scroll position
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled",
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
