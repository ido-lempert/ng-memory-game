import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-banner',
  templateUrl: './finish-banner.component.html',
  styleUrls: ['./finish-banner.component.scss']
})
export class FinishBannerComponent implements OnInit {
  text: string[];

  constructor() { }

  ngOnInit() {
    this.text = 'Wubba-Lubba-Dub-Dub'.split('');
  }

}
