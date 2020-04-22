import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemTelaComponent } from './mensagem-tela.component';

describe('MensagemTelaComponent', () => {
  let component: MensagemTelaComponent;
  let fixture: ComponentFixture<MensagemTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
