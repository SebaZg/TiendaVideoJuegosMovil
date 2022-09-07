import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.page.html',
  styleUrls: ['./consolas.page.scss'],
})
export class ConsolasPage implements OnInit {

  public Consola1 =[
    {
     nombre:'Play 5',
     precio:'$600.000',
     tipo:'Consola',
    },
 ];
 public Consola2 =[
  {
   nombre:'Xbox Series S',
   precio:'$$550.000',
   tipo:'Consola',
  },
  ];
  public Consola3 =[
    {
     nombre:'Nintendo Switch',
     precio:'$400.000',
     tipo:'Consola',
    },
    ];

  public Consola4 =[
  {
   nombre:'WII',
   precio:'$$330.000',
   tipo:'Consola',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
