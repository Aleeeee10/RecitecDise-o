import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit, OnDestroy {
  
  // Datos de residuos existentes
  residuos = [
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
    },
  ];
  
  residuosSeleccionada: any = this.residuos[0];

  // Datos para el carrusel de aspectos
  carouselSlides = [
    {
      title: 'Aspectos Positivos',
      type: 'positive',
      content: [
        '17,4% de los RAEE documentados se gestionan adecuadamente a nivel mundial',
        'El número de países con políticas sobre RAEE ha aumentado de 61 a 78 desde 2014',
        'Creciente conciencia ambiental y programas de reciclaje',
        'Desarrollo de tecnologías más eficientes para el procesamiento',
        'Creación de empleos verdes en el sector del reciclaje'
      ],
      image: 'assets/img/gestion.jpg'
    },
    {
      title: 'Aspectos Negativos',
      type: 'negative',
      content: [
        'El destino del 82,6% de RAEE restante es incierto',
        'Los impactos ambientales varían según la región',
        'Los residuos electrónicos contienen aditivos tóxicos y sustancias peligrosas',
        'Falta de infraestructura adecuada en países en desarrollo',
        'Exportación ilegal de residuos a países menos desarrollados'
      ],
      image: 'assets/img/incertidumbre.jpg'
    },
    {
      title: 'Soluciones Implementadas',
      type: 'solutions',
      content: [
        'Programas de Responsabilidad Extendida del Productor (REP)',
        'Centros de acopio especializados y certificados',
        'Tecnologías avanzadas de separación y reciclaje',
        'Campañas educativas y de sensibilización',
        'Legislación específica para el manejo de RAEE'
      ],
      image: 'assets/img/61 a 78.png'
    }
  ];

  currentSlideIndex = 0;
  carouselInterval: any;

  // Datos para el carrusel de materiales
  materialDevices = [
    {
      name: 'Teléfono Móvil',
      icon: '📱',
      image: 'assets/img/telefono_sin_fondo.png',
      materials: [
        { name: 'Plástico', percentage: '40%', color: '#f59e0b' },
        { name: 'Vidrio y Cerámica', percentage: '20%', color: '#8b5cf6' },
        { name: 'Cobre', percentage: '10%', color: '#10b981' },
        { name: 'Acero', percentage: '10%', color: '#3b82f6' },
        { name: 'Aluminio', percentage: '3-20%', color: '#ef4444' },
        { name: 'Otros metales', percentage: '<5%', color: '#6b7280' }
      ]
    },
    {
      name: 'Televisor',
      icon: '📺',
      image: 'assets/img/telev_personaje.png',
      materials: [
        { name: 'Hierro', percentage: '30%', color: '#374151' },
        { name: 'Plástico', percentage: '28%', color: '#f59e0b' },
        { name: 'Aluminio', percentage: '15%', color: '#ef4444' },
        { name: 'Cobre', percentage: '10%', color: '#10b981' },
        { name: 'Vidrio', percentage: '12%', color: '#8b5cf6' },
        { name: 'Otros', percentage: '5%', color: '#6b7280' }
      ]
    },
    {
      name: 'Computadora',
      icon: '💻',
      image: 'assets/img/tele1.png',
      materials: [
        { name: 'Plástico', percentage: '23%', color: '#f59e0b' },
        { name: 'Cobre', percentage: '18%', color: '#10b981' },
        { name: 'Hierro', percentage: '7%', color: '#374151' },
        { name: 'Aluminio', percentage: '5%', color: '#ef4444' },
        { name: 'Vidrio', percentage: '15%', color: '#8b5cf6' },
        { name: 'Metales preciosos', percentage: '2%', color: '#6b7280' }
      ]
    }
  ];

  currentMaterialIndex = 0;
  materialInterval: any;

  ngOnInit(): void {
    this.initAOS();
    this.startCarousel();
    this.startMaterialCarousel();
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    if (this.materialInterval) {
      clearInterval(this.materialInterval);
    }
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

  // Métodos para gestión de residuos
  seleccionarResiduo(residuo: any): void {
    this.residuosSeleccionada = residuo;
    
    // Reinicializar AOS para las nuevas animaciones
    setTimeout(() => {
      this.refreshAOS();
    }, 100);
  }

  // Métodos para carrusel de aspectos
  startCarousel(): void {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 8000); // Cambia cada 8 segundos
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselSlides.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.carouselSlides.length - 1 
      : this.currentSlideIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  // Métodos para carrusel de materiales
  startMaterialCarousel(): void {
    this.materialInterval = setInterval(() => {
      this.nextMaterial();
    }, 6000); // Cambia cada 6 segundos
  }

  nextMaterial(): void {
    this.currentMaterialIndex = (this.currentMaterialIndex + 1) % this.materialDevices.length;
  }

  previousMaterial(): void {
    this.currentMaterialIndex = this.currentMaterialIndex === 0 
      ? this.materialDevices.length - 1 
      : this.currentMaterialIndex - 1;
  }

  goToMaterial(index: number): void {
    this.currentMaterialIndex = index;
  }

  // Método para refrescar AOS
  private async refreshAOS(): Promise<void> {
    try {
      const AOS = await import('aos');
      AOS.refresh();
    } catch (error) {
      console.error('Error refreshing AOS:', error);
    }
  }

  // Método para detener carruseles cuando el usuario interactúa
  pauseCarousels(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    if (this.materialInterval) {
      clearInterval(this.materialInterval);
    }
    
    // Reiniciar después de 10 segundos de inactividad
    setTimeout(() => {
      this.startCarousel();
      this.startMaterialCarousel();
    }, 10000);
  }

  // Métodos para manejar interacciones del usuario
  onSlideClick(): void {
    this.pauseCarousels();
  }

  onMaterialClick(): void {
    this.pauseCarousels();
  }

  // Método para obtener el color del slide actual
  getCurrentSlideColor(): string {
    const slide = this.carouselSlides[this.currentSlideIndex];
    switch (slide.type) {
      case 'positive':
        return '#10b981';
      case 'negative':
        return '#dc2626';
      case 'solutions':
        return '#2563eb';
      default:
        return '#6b7280';
    }
  }

  // Método para obtener estadísticas dinámicas
  getGlobalStats() {
    return [
      {
        icon: 'fas fa-globe-americas',
        title: 'Generación Global',
        value: '54 millones',
        description: 'de toneladas de RAEE generadas anualmente',
        color: '#3b82f6'
      },
      {
        icon: 'fas fa-recycle',
        title: 'Reciclaje Actual',
        value: '17.4%',
        description: 'de RAEE gestionados adecuadamente',
        color: '#10b981'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Crecimiento',
        value: '5%',
        description: 'anual en la generación de residuos',
        color: '#f59e0b'
      },
      {
        icon: 'fas fa-flag',
        title: 'Ecuador',
        value: '8° lugar',
        description: 'en América Latina por generación per cápita',
        color: '#ef4444'
      }
    ];
  }
}