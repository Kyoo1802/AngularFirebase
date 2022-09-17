import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PookyComponent } from './pooky.component';

describe('PookyComponent', () => {
  let component: PookyComponent;
  let fixture: ComponentFixture<PookyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PookyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PookyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
