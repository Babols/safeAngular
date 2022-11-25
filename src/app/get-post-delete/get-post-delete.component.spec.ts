import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPostDeleteComponent } from './get-post-delete.component';

describe('GetPostDeleteComponent', () => {
  let component: GetPostDeleteComponent;
  let fixture: ComponentFixture<GetPostDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPostDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPostDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
