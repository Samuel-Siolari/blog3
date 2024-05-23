import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogListarComponent } from './blog-listar.component';

describe('BlogListarComponent', () => {
  let component: BlogListarComponent;
  let fixture: ComponentFixture<BlogListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
