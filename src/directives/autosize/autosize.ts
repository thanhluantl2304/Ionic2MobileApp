import {ElementRef, HostListener, Directive, OnInit} from '@angular/core';

/**
 * Generated class for the AutosizeDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: 'ion-textarea[autosize]'
})

export class AutosizeDirective {

  @HostListener('input', ['$event.target'])  onInput(textArea:HTMLTextAreaElement):void {
    this.adjust();
  }

  constructor(public element:ElementRef) {
  }

  ngOnInit():void {
    setTimeout(() => this.adjust(), 0);
  }

  adjust():void {
    let textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    var scrollHeight= textArea.scrollHeight + "px";
    textArea.style.height = scrollHeight;
  }

}
