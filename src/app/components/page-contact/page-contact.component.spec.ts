import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCOntactComponent } from './page-contact.component';

describe('PageCOntactComponent', () => {
  let component: PageCOntactComponent;
  let fixture: ComponentFixture<PageCOntactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCOntactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCOntactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
