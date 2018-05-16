import { Component, OnInit } from '@angular/core';

import { Tips } from '../tips';
import { TipsService } from '../tips.service';


@Component({
  selector: 'app-tips-tricks',
  templateUrl: './tips-tricks.component.html',
  styleUrls: ['./tips-tricks.component.css']
})
export class TipsTricksComponent implements OnInit {

	constructor(private tipsService: TipsService) { }

	tipstricks: Tips[];

    selectedTips: Tips;


  ngOnInit() {
    this.getTips();
  }

  getTips(): void {
    this.tipsService.getTipsTricks()
    .subscribe(tipstricks => this.tipstricks = tipstricks);
  }

  onSelect(tips: Tips): void {
  	this.selectedTips = tips;
  }
}