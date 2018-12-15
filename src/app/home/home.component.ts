import { Component, OnInit, HostListener } from '@angular/core';
import { MedicsService } from '../shared/services/medics.service';
import { ServicesService } from '../shared/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  medics: any;
  services: any;
  innerWidth: number;
  images: any;

  constructor(private medicsService: MedicsService, private servsService: ServicesService) {
    this.innerWidth = window.innerWidth;
    this.images = [1, 2, 3].map(() => `https://picsum.photos/${this.innerWidth}/500?random&t=${Math.random()}`);
    this.medics = this.medicsService.getMedics();
    this.services = this.servsService.getServices();
  }

  ngOnInit() {
  }
}
