import {Component, OnInit} from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cards: Card[];

  private flipedCard: Card;

  ngOnInit(): void {
    this.shuffle();
  }

  flip(card: Card) {
    if (card.flipped) {
      return;
    }

    card.flipped = true;
    if (this.flipedCard) {
      if (this.flipedCard.frontImageUrl === card.frontImageUrl) {
        // TODO: check finish
        this.flipedCard = undefined;
      } else {
        setTimeout(() => {
          // TODO :: fix race condition
          this.flipedCard.flipped = card.flipped = false;
          this.flipedCard = undefined;
        }, 300);
      }
    } else {
      this.flipedCard = card;
    }
  }

  shuffle() {
    this.cards = [];

    for (let i = 1; i <= 5; i++) {
      for (let j = 0; j < 2; j++) {
        const card = {
          flipped: false,
          backImageUrl: 'assets/images/back.jpg',
          frontImageUrl: `assets/images/${ i < 10 ? '0' + i : i}.jpg`
        };
        this.cards.push(card);
      }
    }

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // swap elements
    }
  }
}
