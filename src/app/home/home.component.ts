import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  services = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/348/225?random&t=${Math.random()}`);
  medics = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/348/225?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
