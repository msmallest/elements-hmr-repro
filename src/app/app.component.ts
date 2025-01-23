import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {PopupService} from './popup.service';
import { PopupComponent } from './popup/popup.component';
@Component({
  selector: 'app-root',
  template: `
    <a href="https://angular.dev/guide/elements#limitations" target="_blank">example from docs in a new CLI project with latest 19.1.3 framework 19.1.4 cli patches</a>
    <!-- <button type="button" (click)="popup.showAsComponent(input.value)">Show as component</button>
    <button type="button" (click)="popup.showAsElement(input.value)">Show as element</button> -->
    <!-- <my-popup message="hey" /> -->
  `,
  providers: [PopupService],
  imports: [PopupComponent],
})
export class AppComponent {
  constructor(
    injector: Injector,
    public popup: PopupService,
  ) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);

    this.popup.showAsElement('hey')
  }
}
