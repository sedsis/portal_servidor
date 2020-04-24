import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirNoticiaComponent } from './exibir-noticia.component';

describe('ExibirNoticiaComponent', () => {
  let component: ExibirNoticiaComponent;
  let fixture: ComponentFixture<ExibirNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibirNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibirNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
