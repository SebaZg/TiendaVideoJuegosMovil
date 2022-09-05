import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Juegos', url: '/lista-juegos', icon: 'basketball' },
    { title: 'Consolas', url: '/consolas', icon: 'game-controller' },
    { title: 'Figuras', url: '/figuras', icon: 'accessibility' },
    
  ];

  
  public Menu = ['Direccion: Av.Lala', 'Correo: Juegos.lala@juegos.com', 'Numero: 989234512'];

  public Contacto = ['Direccion: Av.Lala', 'Correo: Juegos.lala@juegos.com', 'Numero: 989234512'];

  
  constructor() {

    
  }
}
