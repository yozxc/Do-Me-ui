import { AfterViewChecked, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdownPosition]'
})
export class DropdownPositionDirective implements AfterViewChecked {
    constructor(private el: ElementRef, private render: Renderer2) {}

    ngAfterViewChecked(): void {
        const element = this.el.nativeElement;
        const coordinates = element.getBoundingClientRect();

        if (coordinates.bottom > window.innerHeight) {
            this.render.setStyle(element, 'top', `calc(50% - ${coordinates.bottom - window.innerHeight + 5}px)`);
        }
        if (coordinates.top < 0) {
            this.render.setStyle(element, 'top', `calc(50% + ${coordinates.top * -1 + 5}px)`);
        }
        if (coordinates.left < 0) {
            this.render.setStyle(element, 'left', `calc(50% + ${coordinates.left * -1 + 5}px)`);
        }
        if (coordinates.right > window.innerWidth) {
            this.render.setStyle(element, 'left', `calc(50% - ${coordinates.right - window.innerWidth + 5}px)`);
        }
    }
}
