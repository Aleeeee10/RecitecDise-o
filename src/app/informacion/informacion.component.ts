import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Residuo {
  nombre: string;
  imagen: string;
  caracteristicas: string[];
  descripcion: string;
}

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit, OnDestroy {
  residuos: Residuo[] = [
    {
      nombre: 'Computadoras',
      imagen: 'assets/img/computadoras.jpg',
      caracteristicas: ['Computadoras de escritorio', 'Servidores', 'Estaciones de trabajo'],
      descripcion: 'De las computadoras como RAEE se extraen metales preciosos, plásticos, circuitos electrónicos, discos duros y otros componentes valiosos para reciclaje.'
    },
    {
      nombre: 'Fotocopiadoras',
      imagen: 'assets/img/fotocopiadora.jpg',
      caracteristicas: ['Fotocopiadoras multifuncionales', 'Escáneres especializados', 'Impresoras industriales'],
      descripcion: 'De las fotocopiadoras como RAEE se recuperan metales, plásticos, circuitos electrónicos y tóneres, que requieren un reciclaje especializado.'
    },
    {
      nombre: 'Celulares',
      imagen: 'assets/img/celular.jpg',
      caracteristicas: ['Smartphones', 'Celulares con teclado', 'Teléfonos básicos', 'Tablets móviles'],
      descripcion: 'De los celulares como RAEE se recuperan metales preciosos, baterías, plásticos y circuitos electrónicos para su reciclaje responsable.'
    },
    {
      nombre: 'Impresoras',
      imagen: 'assets/img/impresora.jpg',
      caracteristicas: ['Impresoras láser', 'Impresoras de inyección', 'Equipos multifuncionales', 'Plotters'],
      descripcion: 'De las impresoras como RAEE se recuperan plásticos, metales, cartuchos de tinta y componentes electrónicos para su reutilización o reciclaje.'
    },
    {
      nombre: 'Pantallas',
      imagen: 'assets/img/pantallas.jpg',
      caracteristicas: ['Monitores LCD', 'Pantallas OLED', 'Televisores Plasma', 'Monitores CRT'],
      descripcion: 'De las pantallas como RAEE se extraen plásticos, vidrios, metales y componentes electrónicos, incluyendo sustancias como fósforo y mercurio en ciertos modelos.'
    },
    {
      nombre: 'Módems',
      imagen: 'assets/img/modem.jpg',
      caracteristicas: ['Routers wifi', 'Switches de red', 'Repetidores', 'Access points'],
      descripcion: 'Los módems como RAEE contienen plásticos, placas de circuitos impresos, metales y componentes electrónicos que pueden ser recuperados para su reciclaje.'
    },
    {
      nombre: 'Tabletas',
      imagen: 'assets/img/tabletas.jpg',
      caracteristicas: ['Tabletas Android', 'iPads', 'Kindle readers', 'Tabletas industriales'],
      descripcion: 'De las tabletas como RAEE se extraen metales preciosos, plásticos, baterías y circuitos electrónicos para su reciclaje y reutilización.'
    },
    {
      nombre: 'Cables',
      imagen: 'assets/img/cables.jpg',
      caracteristicas: ['Cables USB', 'Cables UTP', 'Cables Ethernet', 'Cables de alimentación'],
      descripcion: 'Los cables como RAEE incluyen materiales como cobre, plásticos y metales, que se recuperan y reciclan para su reutilización.'
    },
    {
      nombre: 'Portátiles',
      imagen: 'assets/img/portatil.jpg',
      caracteristicas: ['Laptops empresariales', 'Ultrabooks', 'Netbooks', 'Estaciones móviles'],
      descripcion: 'Los portátiles como RAEE contienen componentes electrónicos, metales y plásticos que se recuperan y reciclan para reducir el impacto ambiental.'
    },
    {
      nombre: 'Periféricos',
      imagen: 'assets/img/perifericos.jpg',
      caracteristicas: ['Mouses', 'Teclados', 'Cámaras web', 'Parlantes', 'Auriculares', 'Micrófonos'],
      descripcion: 'Los periféricos como RAEE incluyen componentes electrónicos y plásticos, que se extraen y reciclan para minimizar el impacto ambiental.'
    },
    {
      nombre: 'Piezas y partes',
      imagen: 'assets/img/piezas.jpg',
      caracteristicas: ['Discos SSD', 'Memoria RAM', 'Placas madre', 'Tarjetas gráficas', 'Procesadores'],
      descripcion: 'Las piezas y partes de dispositivos electrónicos como RAEE incluyen metales preciosos, plásticos y materiales electrónicos que se extraen y reciclan.'
    }
  ];

  residuosSeleccionada: Residuo = this.residuos[0];

  carouselSlides = [/* ... */]; // puedes mantener el carrusel existente
  materialDevices = [/* ... */]; // y también la info de materiales
  currentSlideIndex = 0;
  carouselInterval: any;
  currentMaterialIndex = 0;
  materialInterval: any;

  ngOnInit(): void {
    this.initAOS();
    this.startCarousel();
    this.startMaterialCarousel();
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) clearInterval(this.carouselInterval);
    if (this.materialInterval) clearInterval(this.materialInterval);
  }

  seleccionarResiduo(residuo: Residuo): void {
    this.residuosSeleccionada = residuo;
    setTimeout(() => this.refreshAOS(), 100);
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
      console.error('Error al cargar AOS:', error);
    }
  }

  private async refreshAOS(): Promise<void> {
    try {
      const AOS = await import('aos');
      AOS.refresh();
    } catch (error) {
      console.error('Error refreshing AOS:', error);
    }
  }

  startCarousel(): void {
    this.carouselInterval = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselSlides.length;
    }, 8000);
  }

  startMaterialCarousel(): void {
    this.materialInterval = setInterval(() => {
      this.currentMaterialIndex = (this.currentMaterialIndex + 1) % this.materialDevices.length;
    }, 6000);
  }

  pauseCarousels(): void {
    clearInterval(this.carouselInterval);
    clearInterval(this.materialInterval);
    setTimeout(() => {
      this.startCarousel();
      this.startMaterialCarousel();
    }, 10000);
  }

  onSlideClick(): void {
    this.pauseCarousels();
  }

  onMaterialClick(): void {
    this.pauseCarousels();
  }

  getCurrentSlideColor(): string {
    const slide = this.carouselSlides[this.currentSlideIndex];
    switch (slide.type) {
      case 'positive': return '#10b981';
      case 'negative': return '#dc2626';
      case 'solutions': return '#2563eb';
      default: return '#6b7280';
    }
  }

  getGlobalStats() {
    return [
      { icon: 'fas fa-globe-americas', title: 'Generación Global', value: '54 millones', description: 'de toneladas de RAEE generadas anualmente', color: '#3b82f6' },
      { icon: 'fas fa-recycle', title: 'Reciclaje Actual', value: '17.4%', description: 'de RAEE gestionados adecuadamente', color: '#10b981' },
      { icon: 'fas fa-chart-line', title: 'Crecimiento', value: '5%', description: 'anual en la generación de residuos', color: '#f59e0b' },
      { icon: 'fas fa-flag', title: 'Ecuador', value: '8° lugar', description: 'en América Latina por generación per cápita', color: '#ef4444' }
    ];
  }
}
