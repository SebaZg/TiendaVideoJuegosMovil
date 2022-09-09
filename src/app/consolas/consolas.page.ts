import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.page.html',
  styleUrls: ['./consolas.page.scss'],
})
export class ConsolasPage implements OnInit {

  public Consola =[
    {
     nombre:'Play 5',
     precio:'$600.000',
     tipo:'Consola',
     img:"https://th.bing.com/th/id/OIP.6RMZLEoGTXak9yTJFfVrtQHaEy?pid=ImgDet&rs=1",
    },

  {
   nombre:'Xbox Series S',
   precio:'$550.000',
   tipo:'Consola',
   img:"https://www.megagames.cl/wp-content/uploads/2020/12/81VdHXDp6bL._AC_SL1500_.jpg",
  },

    {
     nombre:'Nintendo Switch',
     precio:'$400.000',
     tipo:'Consola',
     img:"https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/c/o/consola-nintendo-switch-11-joy-con-grises.jpg",
    },

  {
   nombre:'WII',
   precio:'$330.000',
   tipo:'Consola',
   img:"https://gizmos.republica.com/files/2012/09/Nintendo-seguira-apoyando-la-consola-Wii-en-el-futuro.jpg",
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
