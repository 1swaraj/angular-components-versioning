import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeLoaderComponent } from './awesome-loader.component';

describe('AwesomeLoaderComponent', () => {
  let component: AwesomeLoaderComponent;
  let fixture: ComponentFixture<AwesomeLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
