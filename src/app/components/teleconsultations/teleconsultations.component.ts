import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-teleconsultations',
  templateUrl: './teleconsultations.component.html',
  styleUrls: ['./teleconsultations.component.css']
})
export class TeleconsultationsComponent {
  imageSrc: string = 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwzfHxkaWdpdGFsJTIwaGVhbHRofGVufDB8fHx8MTcyNDUzNDY0MHww&ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400'; // Ruta de la imagen
  features = [
    {
      title: 'Soporte 24/7',
      description: 'Estamos disponibles para resolver tus dudas y ofrecerte asistencia médica en cualquier momento.'
    },
    {
      title: 'Consulta Virtual',
      description: 'Recibe asesoría médica en tiempo real desde la comodidad de tu hogar.'
    },
    {
      title: 'Atención Personalizada',
      description: 'Nuestros médicos te brindan un servicio adaptado a tus necesidades específicas de salud.'
    }
  ];

  lastScrollTop: number = 0;
  isNavbarVisible: boolean = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scroll hacia abajo
      this.isNavbarVisible = false;
    } else {
      // Scroll hacia arriba
      this.isNavbarVisible = true;
    }

    this.lastScrollTop = scrollTop;
  }

  // Para el formulario de contacto
  formData = {
    name: '',
    email: '',
    message: ''
  };

  handleInputChange(event: Event, field: keyof typeof this.formData) {
    const inputElement = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.formData[field] = inputElement.value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted:', this.formData);
    // Aquí enviarías los datos a un servidor si es necesario
  }
}
