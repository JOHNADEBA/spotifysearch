import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAlbumComponent } from './one-album.component';

describe('OneAlbumComponent', () => {
  let component: OneAlbumComponent;
  let fixture: ComponentFixture<OneAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
