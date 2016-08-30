import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'badge',
  templateUrl: 'badge.component.html',
  styleUrls: ['badge.component.css']
})
export class BadgeComponent implements OnInit {

  public id: number;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.forEach((data: { id: number }) => {
      this.id = data.id;
    });
  }
}