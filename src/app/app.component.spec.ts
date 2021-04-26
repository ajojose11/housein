/* eslint-disable @typescript-eslint/no-unsafe-call */
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'houseIn'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('houseIn');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const compiled = fixture.nativeElement;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(compiled.querySelector('.content span').textContent).toContain(
      'houseIn app is running!'
    );
  });
});
