/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Slickr'`, async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Slickr');
  }));

  it('should render title in a #site-title ided element', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#site-title').textContent).toContain('Slickr');
  }));
});
