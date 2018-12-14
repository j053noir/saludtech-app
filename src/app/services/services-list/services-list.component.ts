import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  services: any;

  constructor(private servsService: ServicesService) {
    this.services = this.servsService.getServices();
  }

  ngOnInit() {
  }

}
