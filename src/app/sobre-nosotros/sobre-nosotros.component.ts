import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,             // Cambia a true para standalone
  imports: [CommonModule],      // Importa CommonModule para directivas comunes
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']  // corregí styleUrl a styleUrls
})
export class SobreNosotrosComponent implements OnInit {
  eventos: any;

  // Propiedades para el zoom de imágenes
  isImageZoomed = false;
  zoomedImageSrc = '';
  zoomedImageAlt = '';

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
