import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicsService {

  private medics = [
    { name: 'Dr. Juan Perez', specialty: 'cardiologo', cost: '$300.000', image: '/assets/images/medics/cardiologo.jpg' },
    { name: 'Dr. Maria Lopez', specialty: 'oncologa', cost: '$500.000', image: '/assets/images/medics/gastroenterologa.jpg' },
    { name: 'Dr. Abraham Amin', specialty: 'oftalmologo', cost: '$150.000', image: '/assets/images/medics/oftalmologo.jpg' },
    { name: 'Dr. Hans Uppercut', specialty: 'oncologo', cost: '$450.000', image: '/assets/images/medics/oncologo.jpg' },
    { name: 'Dr. Karina Marco', specialty: 'medica general', cost: '$100.000', image: '/assets/images/medics/image.jpg' },
    { name: 'Roberto Esponja', specialty: 'enfermero', cost: '$50.000', image: '/assets/images/medics/enfermero.jpg' },
  ];

  constructor() { }

  getMedics() {
    return this.medics.slice();
  }

  getMedic(index: number) {
    return this.medics[index];
  }
}
