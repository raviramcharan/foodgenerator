import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipstricksDetailComponent } from './tipstricks-detail.component';

describe('TipstricksDetailComponent', () => {
  let component: TipstricksDetailComponent;
  let fixture: ComponentFixture<TipstricksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipstricksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipstricksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
