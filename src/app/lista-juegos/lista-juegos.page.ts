import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.page.html',
  styleUrls: ['./lista-juegos.page.scss'],
})
export class ListaJuegosPage implements OnInit {

  public Juego1 =[
    {
     nombre:'Fifa 22',
     precio:'$25.000',
     tipo:'Futbol',
    },
 ];
 public Juego2 =[
  {
   nombre:'GTA V',
   precio:'$25.000',
   tipo:'Mafia',
  },
  ];
  public Juego3 =[
    {
     nombre:'Crash Bash',
     precio:'$32.000',
     tipo:'Aventura',
    },
    ];

  public Juego4 =[
  {
   nombre:'Dead By Daylight',
   precio:'$20.000',
   tipo:'Terror',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
