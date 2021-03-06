import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PartnersComponent } from "./partners.component";
import { AddPartnersComponent } from "./add-partners/add-partners.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

const routes: Routes = [
  { path: "", component: PartnersComponent },
  { path: "add-partner", component: AddPartnersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule],

  declarations: [AddPartnersComponent],
})
export class PartnersModule {}
