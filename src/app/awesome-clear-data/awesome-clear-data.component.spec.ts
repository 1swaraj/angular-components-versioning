import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeClearDataComponent } from './awesome-clear-data.component';

describe('AwesomeClearDataComponent', () => {
  let component: AwesomeClearDataComponent;
  let fixture: ComponentFixture<AwesomeClearDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeClearDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeClearDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
