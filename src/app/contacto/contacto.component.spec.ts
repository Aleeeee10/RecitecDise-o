import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form correctly', () => {
    // Test form validation
    component.contactForm.nombre = 'Test';
    component.contactForm.email = 'test@example.com';
    component.contactForm.asunto = 'recoleccion';
    component.contactForm.mensaje = 'Test message';

    // Formulario válido
    expect(component['isFormValid']()).toBeTruthy();

    // Formulario inválido (falta nombre)
    component.contactForm.nombre = '';
    expect(component['isFormValid']()).toBeFalsy();
  });

  it('should reset form', () => {
    // Llenar formulario
    component.contactForm.nombre = 'Test';
    component.contactForm.email = 'test@example.com';
    component.contactForm.mensaje = 'Test message';

    // Resetear
    component['resetForm']();

    // Verificar que esté vacío
    expect(component.contactForm.nombre).toBe('');
    expect(component.contactForm.email).toBe('');
    expect(component.contactForm.mensaje).toBe('');
  });
});
