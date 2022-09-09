import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.page.html',
  styleUrls: ['./lista-juegos.page.scss'],
})
export class ListaJuegosPage implements OnInit {

  public Juego =[
    {
     nombre:'Fifa 22',
     precio:'$25.000',
     tipo:'Futbol',
     img:"https://tlsastore.com/img/Public/1075-producto-fifa22-1489.jpg",
    },
  {
   nombre:'GTA V',
   precio:'$25.000',
   tipo:'Mafia',
   img:"https://www.thecdkeyhub.com/wp-content/uploads/2020/03/GTA-Grand-Theft-Auto-V-FIVE-5-PC-ROCKSTAR-download-CD-KEY-region-free-768x768.png",
  },
    {
     nombre:'Crash Bash',
     precio:'$32.000',
     tipo:'Aventura',
     img:"https://www.volkgames.com/wp-content/uploads/2020/10/crash-bashh.jpg",
    },
  {
   nombre:'Dead By Daylight',
   precio:'$20.000',
   tipo:'Terror',
   img:"https://static.chollometro.com/threads/thread_full_screen/default/425505_1.jpg",
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
