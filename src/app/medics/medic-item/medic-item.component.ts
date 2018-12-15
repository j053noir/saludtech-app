import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicsService } from 'src/app/shared/services/medics.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-medic-item',
  templateUrl: './medic-item.component.html',
  styleUrls: ['./medic-item.component.scss']
})
export class MedicItemComponent implements OnInit {
  id: number;
  medic: any;
  model: NgbDateStruct;
  date: { year: number, month: number };

  constructor(
    private route: ActivatedRoute,
    private medicsService: MedicsService,
    private calendar: NgbCalendar) {
    this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(data => {
      if (data.id) {
        this.medic = this.medicsService.getMedic(data.id);
      }
    });
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
  }

}
