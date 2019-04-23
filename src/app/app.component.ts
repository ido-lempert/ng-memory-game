import {Component, OnDestroy, OnInit} from '@angular/core';
import {Card} from './card';
import {FormControl} from '@angular/forms';

const minPairs = 3;
const maxPairs = 50;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cards: Card[];
  completed = false;
  maxPairsControl: FormControl;
  private flippedCard: Card;
  // private maxPairsSubscriber: Subscription;

  ngOnInit(): void {
    this.maxPairsControl = new FormControl(minPairs);
    this.shuffle();
  }

  private checkCompletion() {
    let completed = true;

    for (const card of this.cards) {
      if (! card.flipped) {
        completed = false;
        break;
      }
    }

    setTimeout(() => {
      this.completed = completed;
    }, 1000);
  }

  flip(card: Card) {
    if (card.flipped) {
      return;
    }

    card.flipped = true;
    if (this.flippedCard) {
      if (this.flippedCard.frontImageUrl === card.frontImageUrl) {
        this.checkCompletion();
        this.flippedCard = undefined;
      } else {
        setTimeout(() => {
          // TODO :: fix race condition
          this.flippedCard.flipped = card.flipped = false;
          this.flippedCard = undefined;
        }, 300);
      }
    } else {
      this.flippedCard = card;
    }
  }

  nextLevel() {
    this.maxPairsControl.setValue(this.maxPairsControl.value + 3);
    this.shuffle();
  }

  shuffle() {
    const maxPears = Math.min(maxPairs, Math.max(this.maxPairsControl.value, minPairs));

    this.completed = false;
    this.cards = [];

    for (let i = 1; i <= maxPears; i++) {
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
