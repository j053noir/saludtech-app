import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/shared/services/services.service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {
  id: number;
  service: any;
  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(
    private route: ActivatedRoute,
    private servService: ServicesService,
    private calendar: NgbCalendar) {
    this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(data => {
      if (data.id) {
        this.service = this.servService.getService(data.id);
      }
    });
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
  }

}
