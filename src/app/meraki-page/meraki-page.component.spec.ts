import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerakiPageComponent } from './meraki-page.component';

describe('MerakiPageComponent', () => {
  let component: MerakiPageComponent;
  let fixture: ComponentFixture<MerakiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerakiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerakiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
