import {ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Card} from '../card';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnChanges {
  @Input() private card: Card;
  @HostBinding('class.flipped') @Input() private flipped = false;
  frontImageUrl: SafeStyle;
  backImageUrl: SafeStyle;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.flipped = this.card.flipped;
    this.frontImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.card.frontImageUrl})`);
    this.backImageUrl = this.sanitizer.bypassSecurityTrustStyle(`url(${this.card.backImageUrl})`);
  }

}
