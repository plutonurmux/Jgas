import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEstateComponent } from './page-estate.component';

describe('PageEstateComponent', () => {
  let component: PageEstateComponent;
  let fixture: ComponentFixture<PageEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
