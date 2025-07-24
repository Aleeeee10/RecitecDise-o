import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    trigger('slideInStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(200, [
            animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' })
            )
          ])
        ], { optional: true })
      ])
    ]),
    trigger('cardFlip', [
      state('front', style({ transform: 'rotateY(0deg)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front => back', animate('600ms ease-in-out')),
      transition('back => front', animate('600ms ease-in-out'))
    ]),
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'scale(1)' })
        )
      ])
    ]),
    trigger('parallaxMove', [
      transition('* => *', [
        style({ transform: 'translateY(0)' }),
        animate('1s ease-out', style({ transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class InicioComponent implements OnInit, OnDestroy {
  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef;

  // Hacer String disponible en el template
  String = String;

  tarjetas = [
    {
      id: 1,
      titulo: 'AEE',
      subtitulo: 'Aparatos Eléctricos y Electrónicos',
      imagen: 'assets/img/aparatos_electronicos.png',
      descripcion: 'Aparatos eléctricos y electrónicos que funcionan con corriente eléctrica o campos electromagnéticos. Incluyen desde smartphones hasta electrodomésticos.',
      flipped: false,
      color: '#ff6b35',
      icon: '⚡'
    },
    {
      id: 2,
      titulo: 'COP',
      subtitulo: 'Contaminantes Orgánicos Persistentes',
      imagen: 'assets/img/hogar1.png',
      descripcion: 'Contaminantes Orgánicos Persistentes, sustancias tóxicas que se acumulan en el ambiente y seres vivos, causando graves daños.',
      flipped: false,
      color: '#e74c3c',
      icon: '☣️'
    },
    {
      id: 3,
      titulo: 'RAEE',
      subtitulo: 'Residuos Electrónicos',
      imagen: 'assets/aparatos_electronicos.png',
      descripcion: 'Residuos de Aparatos Eléctricos y Electrónicos desechados. Requieren gestión especializada por sus componentes peligrosos.',
      flipped: false,
      color: '#3498db',
      icon: '♻️'
    },
    {
      id: 4,
      titulo: 'Gestión Verde',
      subtitulo: 'Manejo Responsable',
      imagen: 'assets/img/fondo.png',
      descripcion: 'Proceso integral de recolección, tratamiento y reciclaje de residuos electrónicos para minimizar el impacto ambiental.',
      flipped: false,
      color: '#2ecc71',
      icon: '🌱'
    },
    {
      id: 5,
      titulo: 'Innovación',
      subtitulo: 'Tecnología Limpia',
      imagen: 'assets/img/img1.jpeg',
      descripcion: 'Desarrollo de tecnologías innovadoras para el procesamiento eficiente y seguro de residuos electrónicos.',
      flipped: false,
      color: '#9b59b6',
      icon: '💡'
    },
    {
      id: 6,
      titulo: 'Educación',
      subtitulo: 'Conciencia Ambiental',
      imagen: 'assets/img/img2.jpeg',
      descripcion: 'Programas educativos para crear conciencia sobre la importancia del manejo adecuado de residuos electrónicos.',
      flipped: false,
      color: '#f39c12',
      icon: '📚'
    }
  ];

  carouselImages = [
    { 
      src: 'assets/img/img1.jpeg', 
      title: 'Tecnología Responsable', 
      subtitle: 'Cuidemos nuestro planeta' 
    },
    { 
      src: 'assets/img/img2.jpeg', 
      title: 'Reciclaje Inteligente', 
      subtitle: 'Cada dispositivo cuenta' 
    },
    { 
      src: 'assets/img/img3.jpg', 
      title: 'Futuro Sostenible', 
      subtitle: 'Juntos por el medio ambiente' 
    },
    { 
      src: 'assets/img/img4.jpg', 
      title: 'Innovación Verde', 
      subtitle: 'Transformando residuos en recursos' 
    },
    { 
      src: 'assets/img/fondo.png', 
      title: 'Compromiso Ambiental', 
      subtitle: 'Por un planeta más limpio' 
    }
  ];

  statsData = [
    { icon: '📱', number: '50M+', label: 'Dispositivos reciclados', image: 'assets/img/img3.jpg' },
    { icon: '🌍', number: '85%', label: 'Reducción de residuos', image: 'assets/img/img4.jpg' },
    { icon: '⚡', number: '2.5M', label: 'Toneladas procesadas', image: 'assets/img/hogar1.png' },
    { icon: '🏆', number: '15+', label: 'Años de experiencia', image: 'assets/img/fondo.png' }
  ];

  currentSlide = 0;
  isVisible = false;
  scrollY = 0;
  private carouselInterval: any;

  ngOnInit(): void {
    this.startCarousel();
    this.checkVisibility();
  }

  ngOnDestroy(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.scrollY = window.pageYOffset;
    this.checkVisibility();
  }

  private checkVisibility(): void {
    const threshold = window.innerHeight * 0.1;
    this.isVisible = this.scrollY > threshold;
  }

  toggleFlip(tarjeta: any): void {
    tarjeta.flipped = !tarjeta.flipped;
  }

  private startCarousel(): void {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Aumenté a 4 segundos para dar más tiempo a ver cada imagen
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 
      ? this.carouselImages.length - 1 
      : this.currentSlide - 1;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getParallaxTransform(): string {
    return `translateY(${this.scrollY * 0.3}px)`;
  }

  onImageError(event: any): void {
    event.target.src = 'assets/img/img1.jpeg'; // Imagen de fallback
  }
}
