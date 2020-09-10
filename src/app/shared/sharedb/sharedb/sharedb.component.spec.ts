import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedbComponent } from './sharedb.component';

describe('SharedbComponent', () => {
  let component: SharedbComponent;
  let fixture: ComponentFixture<SharedbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
