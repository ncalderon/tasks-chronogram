// For more examples:
//   https://github.com/angular/angular/blob/master/modules/@angular/router/test/integration.spec.ts

import { async, ComponentFixture, fakeAsync, TestBed, tick,
} from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { SpyLocation }         from '@angular/common/testing';

/*import { click }               from './testing/index';*/

// r - for relatively obscure router symbols
import * as r                         from  '@angular/router';
import { Router, RouterLinkWithHref } from '@angular/router';

import { By }                 from '@angular/platform-browser';
import { DebugElement, Type } from '@angular/core';
import { Location }           from '@angular/common';

import { AppComponent }           from './app.component';

let comp:     AppComponent;
let fixture:  ComponentFixture<AppComponent>;
let page:     Page;
let router:   Router;
let location: SpyLocation;

describe('AppComponent & RouterTestingModule', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    })
    .compileComponents();
  }));





});


///////////////
import { NgModuleFactoryLoader }    from '@angular/core';
import { SpyNgModuleFactoryLoader } from '@angular/router/testing';

import { AppModule }             from './app.module';  // should be lazy loaded

let loader: SpyNgModuleFactoryLoader;

///////// Can't get lazy loaded Heroes to work yet
xdescribe('AppComponent & Lazy Loading', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    createComponent();
    loader   = TestBed.get(NgModuleFactoryLoader);
    loader.stubbedModules = {expected: AppModule};
    //router.resetConfig([{path: 'heroes', loadChildren: 'expected'}]);
  }));

  it('dummy', () => expect(true).toBe(true) );


});

////// Helpers /////////

/** Wait a tick, then detect changes */
function advance(): void {
  tick();
  fixture.detectChanges();
}

function createComponent() {
  fixture = TestBed.createComponent(AppComponent);
  comp = fixture.componentInstance;

  const injector = fixture.debugElement.injector;
  location = injector.get(Location) as SpyLocation;
  router = injector.get(Router);
  router.initialNavigation();

  advance();

  page = new Page();
}

class Page {
  aboutLinkDe:     DebugElement;
  dashboardLinkDe: DebugElement;
  heroesLinkDe:    DebugElement;
  recordedEvents:  any[]  =  [];

  // for debugging
  comp: AppComponent;
  location: SpyLocation;
  router: Router;
  fixture: ComponentFixture<AppComponent>;

  expectEvents(pairs: any[]) {
    const events = this.recordedEvents;
    expect(events.length).toEqual(pairs.length, 'actual/expected events length mismatch');
    for (let i = 0; i < events.length; ++i) {
      expect((<any>events[i].constructor).name).toBe(pairs[i][0].name, 'unexpected event name');
      expect((<any>events[i]).url).toBe(pairs[i][1], 'unexpected event url');
    }
  }

  constructor() {
    router.events.subscribe(e => this.recordedEvents.push(e));
    const links = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    this.aboutLinkDe     = links[2];
    this.dashboardLinkDe = links[0];
    this.heroesLinkDe    = links[1];

    // for debugging
    this.comp    = comp;
    this.fixture = fixture;
    this.router  = router;
  }
}

function expectPathToBe(path: string, expectationFailOutput?: any) {
  expect(location.path()).toEqual(path, expectationFailOutput || 'location.path()');
}

function expectElementOf(type: Type<any>): any {
  const el = fixture.debugElement.query(By.directive(type));
  expect(el).toBeTruthy('expected an element for ' + type.name);
  return el;
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
