import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.page.html',
  styleUrls: ['./figuras.page.scss'],
})
export class FigurasPage implements OnInit {

  public Figura1 =[
    {
     nombre:'Naruto Shippuden',
     precio:'$60.000',
     tipo:'Coleccion',
    },
 ];
 public Figura2 =[
  {
   nombre:'Crash Bandicoot',
   precio:'$40.000',
   tipo:'Coleccion',
  },
  ];
  public Figura3 =[
    {
     nombre:'Goku Ultra Instinto',
     precio:'$60.000',
     tipo:'Coleccion',
    },
    ];

  public Figura4 =[
  {
   nombre:'Pikachu',
   precio:'$44.000',
   tipo:'Coleccion',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
