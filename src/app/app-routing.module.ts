import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactSheetComponent } from './fact-sheet/fact-sheet.component';
// import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
    // { path: '', component: FormsComponent },
    { path: 'kash-fact/:id', component: FactSheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
