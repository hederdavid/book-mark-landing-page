import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadExtensionComponent } from './download-extension.component';

describe('DownloadExtensionComponent', () => {
  let component: DownloadExtensionComponent;
  let fixture: ComponentFixture<DownloadExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadExtensionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DownloadExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
