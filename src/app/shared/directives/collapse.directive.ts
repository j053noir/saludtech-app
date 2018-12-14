import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective {

  private target: any;

  constructor(private elRef: ElementRef) {
    this.target = this.elRef.nativeElement.dataset['target'].replace('#', '');
  }

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
    document.getElementById(this.target).classList.add('show');
  }

  private close() {
    document.getElementById(this.target).classList.remove('show');
  }

}
