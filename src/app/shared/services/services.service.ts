import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private services = [
    {
      name: 'Cardiología',
      descprition: 'In eu accumsan nulla. Class aptent taciti ' +
        'sociosqu ad litora torquent per conubia nostra,' +
        ' per inceptos himenaeos. Nulla blandit condimentum nibh vitae dapibus.',
      cost: 'COP $300.000',
      image: '/assets/images/services/1.jpg'
    },
    {
      name: 'Dermatología',
      descprition: 'In eu accumsan nulla. Class aptent taciti ' +
        'sociosqu ad litora torquent per conubia nostra,' +
        ' per inceptos himenaeos. Nulla blandit condimentum nibh vitae dapibus.',
      cost: 'COP $150.000',
      image: '/assets/images/services/2.jpg'
    },
    {
      name: 'Gastronenterología',
      descprition: 'In eu accumsan nulla. Class aptent taciti ' +
        'sociosqu ad litora torquent per conubia nostra,' +
        ' per inceptos himenaeos. Nulla blandit condimentum nibh vitae dapibus.',
      cost: 'COP $120.000',
      image: '/assets/images/services/3.jpg'
    },
    {
      name: 'Hepatología',
      descprition: 'In eu accumsan nulla. Class aptent taciti ' +
        'sociosqu ad litora torquent per conubia nostra,' +
        ' per inceptos himenaeos. Nulla blandit condimentum nibh vitae dapibus.',
      cost: 'COP $180.000',
      image: '/assets/images/services/4.jpg'
    },
    {
      name: 'Nefrología',
      descprition: 'In eu accumsan nulla. Class aptent taciti ' +
        'sociosqu ad litora torquent per conubia nostra,' +
        ' per inceptos himenaeos. Nulla blandit condimentum nibh vitae dapibus.',
      cost: 'COP $400.000',
      image: '/assets/images/services/5.jpg'
    },
    {
      name: 'Oftalmología',
      descprition: 'In eu accumsan nulla. Class aptent taciti ' +
        'sociosqu ad litora torquent per conubia nostra,' +
        ' per inceptos himenaeos. Nulla blandit condimentum nibh vitae dapibus.',
      cost: 'COP $150.000',
      image: '/assets/images/services/6.jpg'
    },
  ];

  constructor() { }

  getServices() {
    return this.services.slice();
  }

  getService(index: number) {
    return this.services[index];
  }
}
