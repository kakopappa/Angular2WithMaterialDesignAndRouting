import { Component } from '@angular/core';
@Component({
  selector: 'my-appxx',
  template: `
    <div class="app-content">
  <md-card>
    <button md-button>FLAT</button>
    <button md-raised-button>RAISED</button>
  </md-card>
  <md-card>
    <button md-icon-button>
      <md-icon class="md-24">favorite</md-icon>
    </button>
    <button md-fab>
      <md-icon class="md-24">add</md-icon>
    </button>
    <button md-mini-fab>
      <md-icon class="md-24">add</md-icon>
    </button>
  </md-card>
  <md-card>
    <button md-raised-button color="primary">PRIMARY</button>
    <button md-raised-button color="accent">ACCENT</button>
    <button md-raised-button color="warn">WARN</button>
  </md-card>
  <md-card>
    <button md-button disabled>OFF</button>
    <button md-raised-button disabled>OFF</button>
    <button md-mini-fab disabled><md-icon>check</md-icon></button>
  </md-card>
</div>
  `
})
export class FirstComponent { }