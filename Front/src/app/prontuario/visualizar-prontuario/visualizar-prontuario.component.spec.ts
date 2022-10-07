import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarProntuarioComponent } from './visualizar-prontuario.component';

describe('VisualizarProntuarioComponent', () => {
  let component: VisualizarProntuarioComponent;
  let fixture: ComponentFixture<VisualizarProntuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarProntuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarProntuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
