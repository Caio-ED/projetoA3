import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcarTratamentosComponent } from './marcar-tratamentos.component';

describe('MarcarTratamentosComponent', () => {
  let component: MarcarTratamentosComponent;
  let fixture: ComponentFixture<MarcarTratamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcarTratamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcarTratamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
