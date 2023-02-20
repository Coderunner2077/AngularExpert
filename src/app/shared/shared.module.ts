import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatToolbarModule
  ]
})
export class SharedModule { }

/*
    Le flag  --routing  permet d'ajouter automatiquement un module de routing depuis le CLI.

    ng add  permet d'ajouter certaines bibliothèques comme Angular Material à votre projet Angular.

    Pour utiliser un component Material, il faut importer le module correspondant.

    Exporter des éléments depuis un module les met à disposition de tout autre module qui viendrait l'importer
     – par exemple, exporter MatToolbarModule dans SharedModule.
*/
