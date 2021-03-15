import { Component } from '@angular/core';
@Component({
  // The template section has its OWN html!
  template: `
  <h2 highlight="skyblue">About</h2>
  <h3>Quote of the day:</h3>
  <twain-quote></twain-quote>
  `
})
export class AboutComponent { }

//  The <twain-quote></twain-quote> component gets a NEW quote.



