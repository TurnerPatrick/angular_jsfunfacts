import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherLevelFunctionComponent } from './higher-level-function.component';

describe('HigherLevelFunctionComponent', () => {
  let component: HigherLevelFunctionComponent;
  let fixture: ComponentFixture<HigherLevelFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherLevelFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherLevelFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
