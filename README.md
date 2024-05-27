# Chess Game Using TypeScript
A Chess Game made using TypeScript and Angular. Play with your friend in the same browser or against a computer which uses Stockfish API

 - Play with your Friend in the same browser
 - Play Against Computer which in this case is Stockfish
 - On left we have Move Tracker which tracks every moves and gives you the ability to go back to prev stage
 - On Right we have an option to choose Stockfish level. That pops up when user wants to play against computer.
 - Functionality of Promotion

<hr>
<b>Optional: </b> As I continue to expand the Domain of my Knowledge I recently did Basics of Angular and Typescript. In my opinion Knowing JavaScript and a statically-typed language like Java or C++ can make learning TypeScript significantly easier. Concepts like Single Page Application, Structure of Angular Project, Concepts like Directives, lifecycle hooks are really Important. <a href="https://www.youtube.com/watch?v=fJIsqZmQVZQ">This</a> video from FCC helped in completion of this Game. Learned a lot about TypeScript, Angular and Logic Building through this video. 
<hr>

## Table of Content

| Topics Covered                                     |
| -------------------------------------------------- |
| [Demo of the Project](demo-of-the-project)                               |
| [Overview of the Project Model]()                     |
| [Some Basic Concepts of Angular used in this project]() |
| [Functionalities of Some Important Functions]()        |
| [How to Run it]()                                      |
<hr>

## Demo of the Project
<a name="Demo of the Project"></a>
<video src="https://github.com/Gaurav-Van/Chess-Game-Using-TypeScript/assets/50765800/9c551aa1-01a0-4ef8-a088-3ade1b98bb87"></video>
<video src="https://github.com/Gaurav-Van/Chess-Game-Using-TypeScript/assets/50765800/d12002c9-0914-4be2-b956-4e11e16834cc"></video>
<hr>

## Overview of the Project Model

<img src="https://github.com/Gaurav-Van/Chess-Game-Using-TypeScript/assets/50765800/2de91600-425f-43a7-a456-6bed6de5b741" height=400 width=900>
<hr>

## Some Basic Concepts of Angular used in this project

### Angular Directives

Angular directives are special markers in the DOM that tell Angular to do something with a DOM element (e.g., apply behavior or transformation). Directives can be categorized into three types: **Component Directives**, **Structural Directives**, and **Attribute Directives**.

### Component Directives
Component directives are the most common type, created with the `@Component` decorator.

### Example:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<h1>Hello, World!</h1>'
})
export class ExampleComponent { }
```
- **selector**: Specifies the tag name for the component.
- **template**: Defines the HTML template for the component.

### Structural Directives
Structural directives change the DOM layout by adding or removing elements. Common structural directives are `*ngIf`, `*ngFor`, and `*ngSwitch`.

### `*ngIf`:
Conditionally includes a template based on the value of an expression.
```html
<div *ngIf="isVisible">Visible Content</div>
```

### `*ngFor`:
Repeats a template for each item in a list.
```html
<ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
```

### `*ngSwitch`:
Switches between alternative views.
```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="'A'">Case A</p>
  <p *ngSwitchCase="'B'">Case B</p>
  <p *ngSwitchDefault>Default Case</p>
</div>
```

### Attribute Directives
Attribute directives change the appearance or behavior of an element, component, or another directive. Common attribute directives are `ngClass`, `ngStyle`, and custom attribute directives.

### `ngClass`:
Dynamically adds or removes CSS classes.
```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Styled Content</div>
```

### `ngStyle`:
Dynamically sets inline styles.
```html
<div [ngStyle]="{'color': color, 'font-size': fontSize + 'px'}">Styled Content</div>
```

### Custom Attribute Directive:
Custom directives are created using the `@Directive` decorator.
```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }
}
```
- **ElementRef**: Accesses the element the directive is applied to.
- **Renderer2**: Interacts with the DOM in a safe way.

### Summary
- **Component Directives**: Define reusable UI components.
- **Structural Directives**: Alter the DOM layout (`*ngIf`, `*ngFor`, `*ngSwitch`).
- **Attribute Directives**: Change the appearance or behavior of elements (`ngClass`, `ngStyle`, custom directives).
<hr>

### Lifecycle Hooks in Angular

Lifecycle hooks in Angular are special methods that allow you to tap into different phases of a component or directive's lifecycle. These hooks provide opportunities to execute custom logic at key moments in the lifecycle, such as when a component is created, initialized, updated, or destroyed.

### Lifecycle Hooks Overview

Here are the main lifecycle hooks provided by Angular:

1. **`ngOnChanges`**: Called before `ngOnInit` and whenever one or more data-bound input properties change.
2. **`ngOnInit`**: Called once after the first `ngOnChanges`.
3. **`ngDoCheck`**: Called during every change detection run, immediately after `ngOnChanges` and `ngOnInit`.
4. **`ngAfterContentInit`**: Called once after Angular projects external content into the component's view.
5. **`ngAfterContentChecked`**: Called after every check of the projected content.
6. **`ngAfterViewInit`**: Called once after Angular initializes the component's views and child views.
7. **`ngAfterViewChecked`**: Called after every check of the component's views and child views.
8. **`ngOnDestroy`**: Called just before Angular destroys the component.

### `OnInit`

The `OnInit` interface is used to define the `ngOnInit` method, which is a lifecycle hook called by Angular to indicate that the component has been initialized.

#### Purpose

* Perform initialization logic that requires component properties to be initialized.
* Fetch data from a service.
* Set up initial states or variables.

#### Implementation

To use `OnInit`:

1. Import `OnInit` from `@angular/core`.
2. Implement the `OnInit` interface in your component.
3. Define the `ngOnInit` method.

#### Example

    import { Component, OnInit } from '@angular/core';
    
    @Component({
      selector: 'app-example',
      template: `<p>Example component</p>`,
    })
    export class ExampleComponent implements OnInit {
      constructor() { }
    
      ngOnInit(): void {
        // Initialization logic here
        console.log('Component initialized');
      }
    }

In this example, `ngOnInit` is called after the component has been initialized, allowing you to perform any necessary setup.

### `OnDestroy`

The `OnDestroy` interface is used to define the `ngOnDestroy` method, which is a lifecycle hook called by Angular just before the component is destroyed.

#### Purpose

* Perform cleanup logic such as unsubscribing from observables, detaching event handlers, and releasing resources.
* Prevent memory leaks by cleaning up any lingering references or timers.

#### Implementation

To use `OnDestroy`:

1. Import `OnDestroy` from `@angular/core`.
2. Implement the `OnDestroy` interface in your component.
3. Define the `ngOnDestroy` method.

#### Example

    import { Component, OnDestroy } from '@angular/core';
    
    @Component({
      selector: 'app-example',
      template: `<p>Example component</p>`,
    })
    export class ExampleComponent implements OnDestroy {
      constructor() { }
    
      ngOnDestroy(): void {
        // Cleanup logic here
        console.log('Component destroyed');
      }
    }

In this example, `ngOnDestroy` is called just before the component is destroyed, allowing you to clean up any resources or subscriptions.

### Combined Example

It is common to use both `OnInit` and `OnDestroy` in a component to handle initialization and cleanup tasks.

    import { Component, OnInit, OnDestroy } from '@angular/core';
    
    @Component({
      selector: 'app-example',
      template: `<p>Example component</p>`,
    })
    export class ExampleComponent implements OnInit, OnDestroy {
      constructor() { }
    
      ngOnInit(): void {
        // Initialization logic here
        console.log('Component initialized');
      }
    
      ngOnDestroy(): void {
        // Cleanup logic here
        console.log('Component destroyed');
      }
    }

### Summary

* **`Lifecycle hooks`**: Special methods provided by Angular to hook into different stages of a component or directive's lifecycle.
* **`OnInit`**: Used to perform initialization tasks after the component's properties have been set.
* **`OnDestroy`**: Used to perform cleanup tasks before the component is destroyed to prevent memory leaks and release resources.
<hr>

## Functionalities of Some Important Functions  




