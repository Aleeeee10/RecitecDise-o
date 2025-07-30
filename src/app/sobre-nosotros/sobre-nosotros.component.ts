import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,             // Cambia a true para standalone
  imports: [CommonModule],      // Importa CommonModule para directivas comunes
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']  // corregí styleUrl a styleUrls
})
export class SobreNosotrosComponent {
eventos: any;
}
