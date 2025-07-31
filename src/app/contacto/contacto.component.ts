import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  
  // Modelo para el formulario de contacto
  contactForm = {
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    asunto: '',
    mensaje: ''
  };

  constructor() { }

  ngOnInit() {
    // Cargar AOS dinámicamente
    this.loadAOS();
  }

  private async loadAOS() {
    try {
      const AOS = await import('aos');
      AOS.init({
        duration: 1000, // Duración por defecto de las animaciones
        once: true,     // Solo animar una vez
        offset: 100,    // Desplazamiento para activar la animación
        easing: 'ease-in-out' // Tipo de easing
      });
    } catch (error) {
      console.log('Error loading AOS:', error);
    }
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.isFormValid()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', this.contactForm);
      
      // Simulación de envío exitoso
      alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
      
      // Limpiar el formulario
      this.resetForm();
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  // Validación básica del formulario
  private isFormValid(): boolean {
    return !!(
      this.contactForm.nombre &&
      this.contactForm.email &&
      this.contactForm.asunto &&
      this.contactForm.mensaje
    );
  }

  // Limpiar el formulario
  private resetForm() {
    this.contactForm = {
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      asunto: '',
      mensaje: ''
    };
  }

  // Método para hacer scroll suave al formulario
  scrollToForm() {
    const elemento = document.querySelector('.formulario-section');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Método para abrir el mapa en una nueva ventana
  abrirMapaCompleto() {
    const url = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31917.68588419276!2d-78.556596!3d-0.420763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5a5669d11eb95%3A0x6fec441a43c5cac1!2sRecitec!5e0!3m2!1ses-419!2sec!4v1753925368798!5m2!1ses-419!2sec';
    window.open(url, '_blank');
  }
}
