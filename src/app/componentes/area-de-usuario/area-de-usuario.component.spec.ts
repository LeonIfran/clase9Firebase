import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeUsuarioComponent } from './area-de-usuario.component';

describe('AreaDeUsuarioComponent', () => {
  let component: AreaDeUsuarioComponent;
  let fixture: ComponentFixture<AreaDeUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDeUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
