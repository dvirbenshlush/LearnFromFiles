import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetailsDialogComponent } from './home-details-dialog.component';

describe('HomeDetailsDialogComponent', () => {
  let component: HomeDetailsDialogComponent;
  let fixture: ComponentFixture<HomeDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDetailsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
