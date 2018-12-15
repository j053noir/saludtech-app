import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef) { }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }

  @HostListener('document:click', ['$event.target']) OutofBounds(target: any) {
    const inBounds: boolean = this.elRef.nativeElement.contains(target);
    if (!inBounds) {
      this.isOpen = false;
      this.close();
    }
  }

  private open() {
    this.elRef.nativeElement.querySelector('.dropdown-menu').classList.add('show');
  }

  private close() {
    this.elRef.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
  }
}
