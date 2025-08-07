import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  HostListener,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';

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
            animate(
              '600ms cubic-bezier(0.35, 0, 0.25, 1)',
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
        animate(
          '500ms cubic-bezier(0.35, 0, 0.25, 1)',
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

export class InicioComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef;
  String = String;

  // CARDS
  tarjetas = [/* tu arreglo como ya está */];
  carouselImages = [/* tu arreglo como ya está */];
  statsData = [/* tu arreglo como ya está */];

  currentSlide = 0;
  isVisible = false;
  scrollY = 0;
  private carouselInterval: any;

  ngOnInit(): void {
    this.startCarousel();
    this.checkVisibility();
    this.initAOS(); // opcional
  }

  ngAfterViewInit(): void {
    this.activarAnimacionCollage(); // Solo para el collage
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
    this.activarAnimacionCollage();
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
    }, 4000);
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
    event.target.src = 'assets/img/img1.jpeg';
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

  // Animación solo para el collage
  private activarAnimacionCollage(): void {
    const elementos = document.querySelectorAll('.animacion-seccion .elemento-animado');
    const windowHeight = window.innerHeight;

    elementos.forEach((el: Element) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
}
