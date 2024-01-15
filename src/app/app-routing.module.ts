import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonComponent } from './pages/button/button.component';
import { ToggleButtonComponent } from './pages/toggle-button/toggle-button.component';

const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"", component:MainComponent},
  {path:"button",component:ButtonComponent},
  {path:"toggleButton",component:ToggleButtonComponent}

];

const main: Routes = [

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
