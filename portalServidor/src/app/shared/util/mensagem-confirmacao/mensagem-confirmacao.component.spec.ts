import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemConfirmacaoComponent } from './mensagem-confirmacao.component';

describe('MensagemConfirmacaoComponent', () => {
  let component: MensagemConfirmacaoComponent;
  let fixture: ComponentFixture<MensagemConfirmacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagemConfirmacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
