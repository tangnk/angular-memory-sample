import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {

  }

}
