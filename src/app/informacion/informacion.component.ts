import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


// Interfaz para los residuos
interface Residuo {
  nombre: string;
  imagen: string;
  caracteristicas: string[];
  descripcion: string;
}

// Interfaz para los slides del carrusel de Aspectos de la Gestión de RAEE
interface CarouselSlide {
  type: 'positive' | 'negative' | 'solutions'; // Solo los tipos que usas en el switch
  // Si tus slides tienen más propiedades, añádelas aquí (ej. title, description, imageUrl)
  // title?: string;
  // description?: string;
  // imageUrl?: string;
}

// Interfaz para los slides del carrusel de Desglose de Materiales
interface MaterialSlide {
  device: string; // 'Teléfono Móvil', 'Televisor', 'Computadora'
  image: string; // Ruta de la imagen del dispositivo
  composition: { type: string; percentage: string; color: string; }[]; // Array de materiales y porcentajes
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
      imagen: '/assets/img/computadoras.jpg',
      caracteristicas: ['Computadoras de escritorio', 'Servidores', 'Estaciones de trabajo'],
      descripcion: 'De las computadoras como RAEE se extraen metales preciosos, plásticos, circuitos electrónicos, discos duros y otros componentes valiosos para reciclaje.'
    },
    {
      nombre: 'Fotocopiadoras',
      imagen: '/assets/img/fotocopiadora.jpg',
      caracteristicas: ['Fotocopiadoras multifuncionales', 'Escáneres especializados', 'Impresoras industriales'],
      descripcion: 'De las fotocopiadoras como RAEE se recuperan metales, plásticos, circuitos electrónicos y tóneres, que requieren un reciclaje especializado.'
    },
    {
      nombre: 'Celulares',
      imagen: '/assets/img/celular.jpg',
      caracteristicas: ['Smartphones', 'Celulares con teclado', 'Teléfonos básicos', 'Tablets móviles'],
      descripcion: 'De los celulares como RAEE se recuperan metales preciosos, baterías, plásticos y circuitos electrónicos para su reciclaje responsable.'
    },
    {
      nombre: 'Impresoras',
      imagen: '/assets/img/impresora.jpg',
      caracteristicas: ['Impresoras láser', 'Impresoras de inyección', 'Equipos multifuncionales', 'Plotters'],
      descripcion: 'De las impresoras como RAEE se recuperan plásticos, metales, cartuchos de tinta y componentes electrónicos para su reutilización o reciclaje.'
    },
    {
      nombre: 'Pantallas',
      imagen: '/assets/img/pantallas.jpg',
      caracteristicas: ['Monitores LCD', 'Pantallas OLED', 'Televisores Plasma', 'Monitores CRT'],
      descripcion: 'De las pantallas como RAEE se extraen plásticos, vidrios, metales y componentes electrónicos, incluyendo sustancias como fósforo y mercurio en ciertos modelos.'
    },
    {
      nombre: 'Módems',
      imagen: '/assets/img/modem.jpg',
      caracteristicas: ['Routers wifi', 'Switches de red', 'Repetidores', 'Access points'],
      descripcion: 'Los módems como RAEE contienen plásticos, placas de circuitos impresos, metales y componentes electrónicos que pueden ser recuperados para su reciclaje.'
    },
    {
      nombre: 'Tabletas',
      imagen: '/assets/img/tabletas.jpg',
      caracteristicas: ['Tabletas Android', 'iPads', 'Kindle readers', 'Tabletas industriales'],
      descripcion: 'De las tabletas como RAEE se extraen metales preciosos, plásticos, baterías y circuitos electrónicos para su reciclaje y reutilización.'
    },
    {
      nombre: 'Cables',
      imagen: '/assets/img/cables.jpg',
      caracteristicas: ['Cables USB', 'Cables UTP', 'Cables Ethernet', 'Cables de alimentación'],
      descripcion: 'Los cables como RAEE incluyen materiales como cobre, plásticos y metales, que se recuperan y reciclan para su reutilización.'
    },
    {
      nombre: 'Portátiles',
      imagen: '/assets/img/portatil.jpg',
      caracteristicas: ['Laptops empresariales', 'Ultrabooks', 'Netbooks', 'Estaciones móviles'],
      descripcion: 'Los portátiles como RAEE contienen componentes electrónicos, metales y plásticos que se recuperan y reciclan para reducir el impacto ambiental.'
    },
    {
      nombre: 'Periféricos',
      imagen: '/assets/img/perifericos.jpg',
      caracteristicas: ['Mouses', 'Teclados', 'Cámaras web', 'Parlantes', 'Auriculares', 'Micrófonos'],
      descripcion: 'Los periféricos como RAEE incluyen componentes electrónicos y plásticos, que se extraen y reciclan para minimizar el impacto ambiental.'
    },
    {
      nombre: 'Piezas y partes',
      imagen: '/assets/img/piezas.jpg',
      caracteristicas: ['Discos SSD', 'Memoria RAM', 'Placas madre', 'Tarjetas gráficas', 'Procesadores'],
      descripcion: 'Las piezas y partes de dispositivos electrónicos como RAEE incluyen metales preciosos, plásticos y materiales electrónicos que se extraen y reciclan.'
    }
  ];

  residuosSeleccionada: Residuo = this.residuos[0];

  // Datos para el carrusel de Aspectos (tipado con CarouselSlide[])
  carouselSlides: CarouselSlide[] = [
    { type: 'positive' },
    { type: 'negative' },
    { type: 'solutions' },
  ];

  // CAMBIO CLAVE: Cambiamos el nombre de 'materialDevices' a 'materialesSlides'
  // para que coincida con el HTML, y lo tipamos con MaterialSlide[]
  materialesSlides: MaterialSlide[] = [
    {
      device: 'Teléfono Móvil',
      image: '/assets/img/telefono_sin_fondo.png',
      composition: [
        { type: 'Plástico', percentage: '40%', color: '#f59e0b' },
        { type: 'Vidrio y Cerámica', percentage: '20%', color: '#8b5cf6' },
        { type: 'Cobre', percentage: '10%', color: '#10b981' },
        { type: 'Acero', percentage: '10%', color: '#3b82f6' },
        { type: 'Aluminio', percentage: '3-20%', color: '#ef4444' },
        { type: 'Otros metales', percentage: '<5%', color: '#6b7280' },
      ]
    },
    {
      device: 'Televisor',
      image: '/assets/img/telev_personaje.png',
      composition: [
        { type: 'Hierro', percentage: '30%', color: '#f59e0b' },
        { type: 'Plástico', percentage: '28%', color: '#8b5cf6' },
        { type: 'Aluminio', percentage: '15%', color: '#10b981' },
        { type: 'Cobre', percentage: '10%', color: '#3b82f6' },
        { type: 'Otros materiales', percentage: '17%', color: '#6b7280' },
      ]
    },
    {
      device: 'Computadora',
      image: '/assets/img/tele1.png',
      composition: [
        { type: 'Plástico', percentage: '23%', color: '#f59e0b' },
        { type: 'Cobre', percentage: '18%', color: '#8b5cf6' },
        { type: 'Hierro', percentage: '7%', color: '#10b981' },
        { type: 'Aluminio', percentage: '5%', color: '#3b82f6' },
        { type: 'Otros materiales', percentage: '47%', color: '#6b7280' },
      ]
    }
  ];

  currentSlideIndex = 0;
  carouselInterval: any;
  currentMaterialIndex = 0;
  materialInterval: any;
  activeMaterialIndex = -1;

  // Propiedades para el zoom de imágenes
  isImageZoomed = false;
  zoomedImageSrc = '';
  zoomedImageAlt = '';

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

  // Métodos de navegación del carrusel principal
  startCarousel(): void {
    // Carrusel manual: no iniciar setInterval, solo cambiar con botones
    // Si quieres volver a activar el auto-slide, descomenta el código abajo
    // if (this.carouselSlides.length > 0) {
    //   this.carouselInterval = setInterval(() => {
    //     this.nextSlide();
    //   }, 8000);
    // }
  }

  // --- NUEVO: prevSlide() ---
  prevSlide(): void {
    this.pauseCarousels(); // Pausar y reiniciar el intervalo al interactuar
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.carouselSlides.length) % this.carouselSlides.length;
  }

  // --- NUEVO: nextSlide() ---
  nextSlide(): void {
    this.pauseCarousels(); // Pausar y reiniciar el intervalo al interactuar
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.carouselSlides.length;
  }

  // --- NUEVO: goToSlide() ---
  goToSlide(index: number): void {
    this.pauseCarousels(); // Pausar y reiniciar el intervalo al interactuar
    this.currentSlideIndex = index;
  }

  // Métodos de navegación del carrusel de materiales
  startMaterialCarousel(): void {
    // Carrusel manual: no iniciar setInterval, solo cambiar con botones
    // Si quieres volver a activar el auto-slide, descomenta el código abajo
    // if (this.materialesSlides.length > 0) {
    //   this.materialInterval = setInterval(() => {
    //     this.nextMaterial();
    //   }, 6000);
    // }
  }

  // --- NUEVO: previousMaterial() ---
  previousMaterial(): void {
    this.pauseCarousels(); // Pausar y reiniciar el intervalo al interactuar
    this.currentMaterialIndex = (this.currentMaterialIndex - 1 + this.materialesSlides.length) % this.materialesSlides.length;
  }

  // --- NUEVO: nextMaterial() ---
  nextMaterial(): void {
    this.pauseCarousels(); // Pausar y reiniciar el intervalo al interactuar
    this.currentMaterialIndex = (this.currentMaterialIndex + 1) % this.materialesSlides.length;
  }

  // --- NUEVO: goToMaterial() ---
  goToMaterial(index: number): void {
    this.pauseCarousels(); // Pausar y reiniciar el intervalo al interactuar
    this.currentMaterialIndex = index;
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
    if (!slide) {
      console.warn('getCurrentSlideColor: El slide actual es undefined. Verifique currentSlideIndex o si carouselSlides está vacío.');
      return '#6b7280';
    }
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

  // Función para abrir modal de normativas (se puede implementar más tarde)
  openNormativaModal(): void {
    alert('Modal de normativas - Se puede implementar con un componente modal dedicado');
  }

  // Métodos para el zoom de imágenes
  zoomImage(imageSrc: string, imageAlt: string = ''): void {
    this.zoomedImageSrc = imageSrc;
    this.zoomedImageAlt = imageAlt;
    this.isImageZoomed = true;
    // Prevenir scroll del body cuando el zoom está activo
    document.body.style.overflow = 'hidden';
  }

  closeZoom(): void {
    this.isImageZoomed = false;
    this.zoomedImageSrc = '';
    this.zoomedImageAlt = '';
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
  }

  // Método para manejar clicks en el overlay (cerrar al clickear fuera de la imagen)
  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeZoom();
    }
  }
}