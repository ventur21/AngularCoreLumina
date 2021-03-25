import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() maxRating = 5;
  @Input() ratingSelected = 0;
  @Output() eventRated: EventEmitter<number> = new EventEmitter<number>();
  maxStars = [];
  userClick = false;
  previousRating;

  constructor() { }

  ngOnInit(): void {
    this.maxStars = Array(this.maxRating).fill(0);
  }

  handlerMouseEnter(indexStar: number): void {
    this.ratingSelected = indexStar + 1;
  }

  handlerMouseLeave(): void {
    if (this.previousRating !== 0) {
      this.ratingSelected = this.previousRating;
    } else {
      this.ratingSelected = 0;
    }
  }

  handlerRate(indexStar: number): void {
    this.ratingSelected = indexStar + 1;
    this.userClick = true;
    this.previousRating = this.ratingSelected;
    this.eventRated.emit(this.ratingSelected);
  }
}

