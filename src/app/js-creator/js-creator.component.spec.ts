import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsCreatorComponent } from './js-creator.component';

describe('JsCreatorComponent', () => {
  let component: JsCreatorComponent;
  let fixture: ComponentFixture<JsCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
