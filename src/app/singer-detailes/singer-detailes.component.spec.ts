import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerDetailesComponent } from './singer-detailes.component';

describe('SingerDetailesComponent', () => {
  let component: SingerDetailesComponent;
  let fixture: ComponentFixture<SingerDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingerDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
