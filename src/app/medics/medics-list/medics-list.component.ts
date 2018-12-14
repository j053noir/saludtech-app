import { Component, OnInit } from '@angular/core';
import { MedicsService } from 'src/app/shared/services/medics.service';

@Component({
  selector: 'app-medics-list',
  templateUrl: './medics-list.component.html',
  styleUrls: ['./medics-list.component.scss']
})
export class MedicsListComponent implements OnInit {
  medics: any[];

  constructor(private medicsService: MedicsService) {
    this.medics = this.medicsService.getMedics();
  }

  ngOnInit() {
  }

}
