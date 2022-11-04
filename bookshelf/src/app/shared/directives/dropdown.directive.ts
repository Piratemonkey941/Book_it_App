import {
          Directive,
          HostListener,
          HostBinding,
          ElementRef,
          Renderer2,

        } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostBinding("class.show")
  isOpen = false;

  @HostListener("click")
  toggleOpen() {
    this.isOpen = !this.isOpen;

    // Get the dropdown menus wrapper
    const dropdownList = this.elementRef.nativeElement.querySelector('.dropdown-menu')

    if (this.isOpen) {
      this.renderer.addClass(dropdownList, 'show')
    } else {
      this.renderer.removeClass(dropdownList, 'show')
    }
  }

}

  // import {  Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

  // @Directive({
  //   selector: "[appDropdown]"
  // })

  // export class DropdownDirective {
  //    // Inject packages
  //   constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // // When "isOpen" switches to true this will be added and when it's false, it will be removed
  //   @HostBinding("class.show") isOpen = false

  //   @HostListener("click") toggleOpen() {
  //    // Change our "isOpen" variable to the opposite of what it currently is.
  //    this.isOpen = !this.isOpen;

  //     // Grab the dropdown-menu div
  //     let dropdownList = this.elementRef.nativeElement.querySelector(
  //       ".dropdown-menu"
  //     );

  //     if (this.isOpen) {
  //       // If "isOpen" is false => REMOVE the class "show" from our dropdownList
  //       this.renderer.addClass(dropdownList, "show");

  //     } else {
  //       // If "isOpen" is false => REMOVE the class "show" from our dropdownList
  //       this.renderer.removeChild(dropdownList, "show");
  //     }
  //   }

  // }
