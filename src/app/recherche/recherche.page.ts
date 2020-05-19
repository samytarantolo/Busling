import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

liste: string[];

  constructor() {
    this.inicializer();
   }

inicializer(){
  this.liste = [
    '23 | Arnouville | Aulnay-sous-Bois',
    '43 | Neuilly-Bagatelle | Gare du Nord',
    '174 | La Défense | Gare de Saint-Ouen RER',
    '82 | Neuilly | Hôpital Américain',
    '93 | Suresnes-De Gaulle | Invalides',
    '38-01 | Montlignon | Gare Ermont-Eaubonne',
    '38-04 | Ermont | Eaubonne',
    '14 | Enghien-les-Bains | Gare Ermont-Eaubonne',
    "128 | Porte d'Orléans | Robinson RER"

  ];
}

rechercher(ev: any) {
  this.inicializer();

  const val = ev.target.value;

  if(val && val.trim() !== '') {
    this.liste = this.liste.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    });
  }
}

  ngOnInit() {
  }

}
