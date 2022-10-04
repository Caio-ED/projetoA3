import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTratamentosComponent } from './visualizar-tratamentos.component';

describe('VisualizarTratamentosComponent', () => {
  let component: VisualizarTratamentosComponent;
  let fixture: ComponentFixture<VisualizarTratamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarTratamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarTratamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
