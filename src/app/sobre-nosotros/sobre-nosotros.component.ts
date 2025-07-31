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
}
