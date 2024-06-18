import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbonBoardComponent } from './kanbon-board.component';

describe('KanbonBoardComponent', () => {
  let component: KanbonBoardComponent;
  let fixture: ComponentFixture<KanbonBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KanbonBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KanbonBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
