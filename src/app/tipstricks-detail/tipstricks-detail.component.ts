import { Component, OnInit } from '@angular/core';

import { Tips } from '../tips';
import { TipsService } from '../tips.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tipstricks-detail',
  templateUrl: './tipstricks-detail.component.html',
  styleUrls: ['./tipstricks-detail.component.css']
})
export class TipstricksDetailComponent implements OnInit {
	tips: Tips;

constructor(
	private route: ActivatedRoute,
    private tipsService: TipsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTips();
  }

  getTips(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tipsService.getTips(id)
      .subscribe(tips => this.tips = tips);
  }


}
