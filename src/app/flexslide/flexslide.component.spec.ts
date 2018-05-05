import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexslideComponent } from './flexslide.component';

describe('FlexslideComponent', () => {
  let component: FlexslideComponent;
  let fixture: ComponentFixture<FlexslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
