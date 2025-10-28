import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAttribute } from './data-attribute';

describe('DataAttribute', () => {
  let component: DataAttribute;
  let fixture: ComponentFixture<DataAttribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataAttribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAttribute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
