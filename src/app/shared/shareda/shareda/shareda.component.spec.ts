import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedaComponent } from './shareda.component';

describe('SharedaComponent', () => {
  let component: SharedaComponent;
  let fixture: ComponentFixture<SharedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
