import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMapComponent } from './page-map.component';

describe('PageMapComponent', () => {
  let component: PageMapComponent;
  let fixture: ComponentFixture<PageMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
