import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMensagemTelaComponent } from './modal-mensagem-tela.component';

describe('ModalMensagemTelaComponent', () => {
  let component: ModalMensagemTelaComponent;
  let fixture: ComponentFixture<ModalMensagemTelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMensagemTelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMensagemTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
