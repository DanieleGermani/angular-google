import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbertoContadorComponent } from './alberto-contador.component';

describe('AlbertoContadorComponent', () => {
  let component: AlbertoContadorComponent;
  let fixture: ComponentFixture<AlbertoContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbertoContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbertoContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
