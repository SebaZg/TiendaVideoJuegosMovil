import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.page.html',
  styleUrls: ['./figuras.page.scss'],
})
export class FigurasPage implements OnInit {

  public Figura =[
    {
     nombre:'Naruto Shippuden',
     precio:'$60.000',
     tipo:'Coleccion',
     img:"https://images-na.ssl-images-amazon.com/images/I/61HKPq-os%2BL._AC_SX679_.jpg",
    },
  {
   nombre:'Crash Bandicoot',
   precio:'$40.000',
   tipo:'Coleccion',
   img:"https://th.bing.com/th/id/OIP.AnL3klhIOBRLxGiD6ufcGAHaHa?pid=ImgDet&rs=1",
  },
    {
     nombre:'Goku Ultra Instinto',
     precio:'$60.000',
     tipo:'Coleccion',
     img:"https://www.aniplay.cl/img/productos/279/p0001035_c3372.jpg",
    },
  {
   nombre:'Pikachu',
   precio:'$44.000',
   tipo:'Coleccion',
   img:"https://www.feriafriki.cl/wp-content/uploads/2020/07/PikachuMusculoso-5.jpg",
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
