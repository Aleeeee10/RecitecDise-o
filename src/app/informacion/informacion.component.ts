import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,             // Cambia a true para standalone
  imports: [CommonModule],      // Importa CommonModule para directivas comunes
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']  // corregí styleUrl a styleUrls
})
export class InformacionComponent implements OnInit {
  residuos = [
    { 
      nombre: 'Computadoras',
      imagen: 'assets/img/computadoras.jpg',
      caracteristicas: ['Computadoras de escritorio', 'Servidores'],
      descripcion: 'De las computadoras como RAEE se extraen metales preciosos, plásticos, circuitos electrónicos, discos duros y otros componentes valiosos para reciclaje.'
    },
    { 
      nombre: 'Fotocopiadoras',
      imagen: 'assets/img/fotocopiadora.jpg',
      caracteristicas: ['Fotocopiadoras', 'Escáner', 'Impresoras'],
      descripcion: 'De las fotocopiadoras como RAEE se recuperan metales, plásticos, circuitos electrónicos y tóneres, que requieren un reciclaje especializado.'
    },
    { 
      nombre: 'Celulares',
      imagen: 'assets/img/celular.jpg',
      caracteristicas: ['Smartphone', 'Celular con teclado', 'Teléfonos'],
      descripcion: 'De los celulares como RAEE se recuperan metales preciosos, baterías, plásticos y circuitos electrónicos para su reciclaje responsable.'
    },
    { 
      nombre: 'Impresoras',
      imagen: 'assets/img/impresora.jpg',
      caracteristicas: ['Impresoras', 'Escanner', 'Fotocopiadoras', 'Multifuncional'],
      descripcion: 'De las impresoras como RAEE se recuperan plásticos, metales, cartuchos de tinta y componentes electrónicos para su reutilización o reciclaje.'
    },
    { 
      nombre: 'Pantallas',
      imagen: 'assets/img/pantallas.jpg',
      caracteristicas: ['LCD', 'OLED', 'Plasma', 'CRT'],
      descripcion: 'De las pantallas como RAEE se extraen plásticos, vidrios, metales y componentes electrónicos, incluyendo sustancias como fósforo y mercurio en ciertos modelos.'
    },    
    { 
      nombre: 'Módems',
      imagen: 'assets/img/modem.jpg',
      caracteristicas: ['Router wifi', 'Switch'],
      descripcion: 'Los módems como RAEE contienen plásticos, placas de circuitos impresos, metales y componentes electrónicos que pueden ser recuperados para su reciclaje.'
    },
    { 
      nombre: 'Tabletas',
      imagen: 'assets/img/tabletas.jpg',
      caracteristicas: ['Tableta', 'Kindle', 'iPad'],
      descripcion: 'De las tabletas como RAEE se extraen metales preciosos, plásticos, baterías y circuitos electrónicos para su reciclaje y reutilización.'
    },
    { 
      nombre: 'Cables',
      imagen: 'assets/img/cables.jpg',
      caracteristicas: ['USB', 'UTP', 'Ethernet', 'Cables eléctricos'],
      descripcion: 'Los cables como RAEE incluyen materiales como cobre, plásticos y metales, que se recuperan y reciclan para su reutilización.'
    },
    { 
      nombre: 'Portátiles',
      imagen: 'assets/img/portatil.jpg',
      caracteristicas: ['Laptop', 'Reproductores DVD'],
      descripcion: 'Los portátiles como RAEE contienen componentes electrónicos, metales y plásticos que se recuperan y reciclan para reducir el impacto ambiental.'
    },
    { 
      nombre: 'Periféricos',
      imagen: 'assets/img/perifericos.jpg',
      caracteristicas: ['Mouses', 'Teclados', 'Cámaras', 'Parlantes', 'Auriculares', 'Otros'],
      descripcion: 'Los periféricos como RAEE incluyen componentes electrónicos y plásticos, que se extraen y reciclan para minimizar el impacto ambiental.'
    },
    { 
      nombre: 'Piezas y partes',
      imagen: 'assets/img/piezas.jpg',
      caracteristicas: ['Tarjetas SSD', 'Placas RAM', 'MOTHERBOARD', 'Placas wifi', 'Todo tipo de piezas y partes'],
      descripcion: 'Las piezas y partes de dispositivos electrónicos como RAEE incluyen metales preciosos, plásticos y materiales electrónicos que se extraen y reciclan.'
    },
  ];
  
  
  residuosSeleccionada: any = this.residuos[0]; // Establecer la primera empresa como seleccionada
  
  ngOnInit(): void {
    this.initAOS();
  }

  async initAOS(): Promise<void> {
    try {
      const AOS = await import('aos');
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out',
        delay: 0,
        anchorPlacement: 'top-bottom'
      });
    } catch (error) {
      console.error('Error loading AOS:', error);
    }
  }
  
  seleccionarResiduo(residuo: any): void {
    this.residuosSeleccionada = residuo;
  }

}
