# Chess Game Using TypeScript
A Chess Game Developed using TypeScript and Angular. Play with your friend in the same browser or against a computer which uses Stockfish API

 - Play with your Friend in the same browser
 - Play Against Computer which in this case is Stockfish
 - On left we have Move Tracker which tracks every moves and gives you the ability to go back to prev stage
 - On Right we have an option to choose Stockfish level. That pops up when user wants to play against computer.
 - Functionality of Promotion
<hr>

Project Deployed as a web app on firebase: https://chess-game-using-typescript.web.app/Chess-Game-Using-TypeScript/

This project is not top-tier or perfect, but it’s sufficient for its intended use.

<hr>

## Table of Content

| Topics Covered                                                                                             |
| ---------------------------------------------------------------------------------------------------------- |   
| [Demo of the Project](#demo-of-the-project)                                                                |
| [Overview of the Project Model](#overview-of-the-project-model)                                            |
| [Some Basic Concepts of Angular used in this project](#some-basic-concepts-of-angular-used-in-this-project)|
| [Functionalities of Some Important Functions](#functionalities-of-some-important-functions)                |
| [Stockfish API Endpoint](#stockfish-api-endpoint)                                                          |
| [How to Run it](#how-to-run-it)                                                                            |
<hr>

## Demo of the Project
<a name="Demo of the Project"></a>
<video src="https://github.com/Gaurav-Van/Chess-Game-Using-TypeScript/assets/50765800/9c551aa1-01a0-4ef8-a088-3ade1b98bb87"></video>
<video src="https://github.com/Gaurav-Van/Chess-Game-Using-TypeScript/assets/50765800/d12002c9-0914-4be2-b956-4e11e16834cc"></video>
<hr>

## Overview of the Project Model

<img src="https://github.com/Gaurav-Van/Chess-Game-Using-TypeScript/assets/50765800/abdf2a21-6822-4200-8717-4ff6e90f5518" height=400 width=900>

### Forsyth–Edwards Notation (FEN)

Forsyth–Edwards Notation (FEN) is a standard notation used to describe a particular board position of a chess game. It allows a game to be restarted from any given position by providing all necessary information in a concise format.

### Purpose
FEN provides a way to describe a chess position in a single line of text using ASCII characters. This notation is essential for recording game positions and resuming play from a specific point. However, FEN does not include information about threefold repetition or draw offers; for these, a different format like Extended Position Description (EPD) is needed.

### FEN Format
A FEN string consists of six fields, each separated by a space:

1. **Piece Placement Data**: Describes the position of all pieces on the board.
2. **Active Color**: Indicates which player is to move next.
3. **Castling Availability**: Shows if castling is available for either side.
4. **En Passant Target Square**: Specifies the target square for en passant capture, if applicable.
5. **Halfmove Clock**: Counts the number of halfmoves since the last capture or pawn move.
6. **Fullmove Number**: Indicates the fullmove number in the game.

### Detailed Breakdown

1. **Piece Placement Data**:
   - The board is divided into ranks (rows) starting from rank 8 to rank 1.
   - Each rank is separated by a slash ("/").
   - Pieces are represented by letters: uppercase for White (P, N, B, R, Q, K) and lowercase for Black (p, n, b, r, q, k).
   - Consecutive empty squares are denoted by digits 1 to 8.

2. **Active Color**:
   - "w" indicates White to move.
   - "b" indicates Black to move.

3. **Castling Availability**:
   - "-" means no castling is available.
   - "K" means White can castle kingside.
   - "Q" means White can castle queenside.
   - "k" means Black can castle kingside.
   - "q" means Black can castle queenside.

4. **En Passant Target Square**:
   - Specifies the square over which a pawn has moved two squares, making an en passant capture possible.
   - If no en passant target exists, this is "-".

5. **Halfmove Clock**:
   - Counts the number of halfmoves (plies) since the last pawn move or capture.
   - Used for enforcing the fifty-move rule.

6. **Fullmove Number**:
   - Starts at 1 and increments after each Black move.

### Examples

### Starting Position
```
rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
```

### After 1.e4
```
rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1
```

### After 1...c5
```
rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2
```

### After 2.Nf3
```
rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2
```
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

<b>Optional: </b> As I continue to expand the Domain of my Knowledge I recently did Basics of Angular and Typescript. In my opinion Knowing JavaScript and a statically-typed language like Java or C++ can make learning TypeScript significantly easier. Concepts like Single Page Application, Structure of Angular Project, Concepts like Directives, lifecycle hooks are really Important. <a href="https://www.youtube.com/watch?v=fJIsqZmQVZQ">This</a> video from FCC helped in completion of this Game. Learned a lot about TypeScript, Angular and Logic Building through this video. 

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

### Finding Safe Squares 
```
FUNCTION findSafeSquares(): Map of player available squares 

Initially 
	define empty map for player available squares [new Map<string, Coords[]>();] [key = x + "," + y]

Foreach square in chess board 
	if square does not have piece or piece on square has difference color than current player: CONTINUE 
	
	define list of coordinates for piece safe squares 

	Foreach direction of piece directions:
		declare newX and newY Coordinates 
		if coordinates are out of range: CONTINUE

		declare piece on new coordinates as newPiece 
		if newPiece is not null AND newPiece.color === piece.color: CONTINUE 

		if (position is SAFE after move) THEN update piece safe squares list 

	Checking if there is possibility for en passant and castling 

	if piece have safe squares append it to the player map 

RETURN Map of player safe squares 
```
### Determine if position is safe after move 
  - We need to simulate how position would look like after the move is played 
  - If player who just moved piece, creates position such that he is in check, position is then unsafe 
  - Restore position as it was before move is played
  - Return safety of the simulate position

### Conditions for En Passant
  - Previous player moved pawn two squares
  - Our pawn and the opponent's pawn are on the same rank
  - The pawns are adjacent to each other
  - Position must be safe after capture is completed

### Insufficient Material Positions
  - King vs King
  - King and Minor Piece vs King
  - Two Knights and King vs King
  - Both Sides Have Exactly One Same Colored Bishop
  - Multiple Bishops of Same Color and King vs King

### To Determine if one side is in check
```
Loop through each piece of opposite color 

	Loop through each of its attacking sqaure 
		if one of the attacking square contains king with the 
		opposite color of piece that is attacking 
	THEN position is in check 

if no such a square exist there is no check 

```
### Select Piece
```
FUNCTION selectingPiece(x: number, y: number): void

IF game is over: RETURN
DECLARE piece as the piece at (x, y)
IF no piece or piece is not the player's piece: RETURN

DECLARE isSameSquareClicked as boolean indicating if the same square was clicked again
CALL unmarkingPreviouslySelectedAndSafeSquares()
IF isSameSquareClicked: RETURN

SET selectedSquare to the piece and its coordinates
SET pieceSafeSquares to the list of safe squares for the selected piece from safeSquares map
```

### Place Piece
```
FUNCTION placingPiece(newX: number, newY: number): void

IF no piece is selected: RETURN
IF new coordinates are not safe for the selected piece: RETURN

DECLARE isPawnSelected as boolean indicating if the selected piece is a pawn
DECLARE isPawnOnLastRank as boolean indicating if the pawn is on the last rank
DECLARE shouldOpenPromotionDialog as boolean indicating if the promotion dialog should be opened

IF shouldOpenPromotionDialog:
  CLEAR pieceSafeSquares
  SET isPromotionActive to true
  SET promotionCoords to the new coordinates
  RETURN

DECLARE prevX and prevY as the previous coordinates of the selected piece
CALL updateBoard(prevX, prevY, newX, newY, promotedPiece)
```

### Update Board
```
FUNCTION updateBoard(prevX: number, prevY: number, newX: number, newY: number, promotedPiece: FENChar | null): void

CALL chessBoard.move(prevX, prevY, newX, newY, promotedPiece)
UPDATE chessBoardView with the new state of the board
CALL markLastMoveAndCheckState(lastMove, checkState)
CALL unmarkingPreviouslySelectedAndSafeSquares()
UPDATE chessBoardState$ observable with the new board state
INCREMENT gameHistoryPointer
```

### Promote Piece
```
FUNCTION promotePiece(piece: FENChar): void

IF no promotion coordinates or no piece is selected: RETURN

SET promotedPiece to the selected piece
DECLARE newX and newY as the new coordinates from promotionCoords
DECLARE prevX and prevY as the previous coordinates of the selected piece
CALL updateBoard(prevX, prevY, newX, newY, promotedPiece)
```

### Mark Last Move and Check State
```
FUNCTION markLastMoveAndCheckState(lastMove: LastMove | undefined, checkState: CheckState): void

SET lastMove to the provided lastMove
SET checkState to the provided checkState

IF lastMove exists: CALL moveSound(lastMove.moveType)
ELSE: CALL moveSound(new Set<MoveType>([MoveType.BasicMove]))
```

### Show Previous Position
```
FUNCTION showPreviousPosition(moveIndex: number): void

DECLARE board, checkState, and lastMove from the game history at the provided index
UPDATE chessBoardView with the board state
CALL markLastMoveAndCheckState(lastMove, checkState)
SET gameHistoryPointer to the provided move index
```

### Move Sound
```
FUNCTION moveSound(moveType: Set<MoveType>): void

DECLARE moveSound as a new Audio object with the default move sound

IF moveType contains MoveType.Promotion: SET moveSound source to promotion sound
ELSE IF moveType contains MoveType.Capture: SET moveSound source to capture sound
ELSE IF moveType contains MoveType.Castling: SET moveSound source to castling sound
ELSE IF moveType contains MoveType.CheckMate: SET moveSound source to checkmate sound
ELSE IF moveType contains MoveType.Check: SET moveSound source to check sound

PLAY moveSound
```

### Flip Board
```
FUNCTION flipBoard(): void

TOGGLE flipMode boolean
```

### Is Square Dark
```
FUNCTION isSquareDark(x: number, y: number): boolean

RETURN ChessBoard.isSquareDark(x, y)
```

### Is Square Selected
```
FUNCTION isSquareSelected(x: number, y: number): boolean

IF no piece is selected: RETURN false
RETURN true if the selected square coordinates match (x, y)
```

### Is Square Safe For Selected Piece
```
FUNCTION isSquareSafeForSelectedPiece(x: number, y: number): boolean

RETURN true if pieceSafeSquares contains coordinates (x, y)
```

### Is Square Last Move
```
FUNCTION isSquareLastMove(x: number, y: number): boolean

IF no lastMove: RETURN false
RETURN true if the square coordinates match either the previous or current coordinates of the lastMove
```

### Is Square Checked
```
FUNCTION isSquareChecked(x: number, y: number): boolean

RETURN true if checkState is active and the coordinates match (x, y)
```

### Is Square Promotion Square
```
FUNCTION isSquarePromotionSquare(x: number, y: number): boolean

IF no promotionCoords: RETURN false
RETURN true if the coordinates match promotionCoords
```

### Unmarking Previously Selected and Safe Squares
```
FUNCTION unmarkingPreviouslySelectedAndSafeSquares(): void

RESET selectedSquare to null
CLEAR pieceSafeSquares

IF isPromotionActive:
  SET isPromotionActive to false
  RESET promotedPiece and promotionCoords to null
```

### Close Pawn Promotion Dialog
```
FUNCTION closePawnPromotionDialog(): void

CALL unmarkingPreviouslySelectedAndSafeSquares()
```
<hr>

## Stockfish API Endpoint

### Endpoint
`https://stockfish.online/api/s/v2.php`

### HTTP Method
`GET`

### Parameters
- `fen`: FEN string to analyze
- `depth`: Depth for engine to go to (integer, maximum 16)

### Response Format
#### JSON

#### Keys and Values

- `success`: Boolean indicating if the request was completed successfully.
  - If `false`, the `data` key will contain error information.
- `bestmove`: String containing the best move in the given position. Example: `bestmove b1c3 ponder h7h6`.
- `eval`: Contains the standard evaluation of the given position or `null` if there is a forced checkmate.
- `mate`: `null` unless there is a forced checkmate in the given position. In such cases, it is the number of moves in which the forced checkmate is completed (positive for white checkmating, negative for black checkmating).
- `continuation`: String containing the top engine line in the position. Example: `b1c3 h7h6 c3e2 c7c6 h2h3`.

### Example Response
```json
{
    "success": true,
    "evaluation": 1.36,
    "mate": null,
    "bestmove": "bestmove b7b6 ponder f3e5",
    "continuation": "b7b6 f3e5 h7h6 g5f6 f8f6 d2f3"
}
```
<hr>

## How to Run it

### Install Angular CLI and Node JS
```
Install Node JS from their Official Site
Angular CLI: npm install -g @angular/cli
```
### Create Angular Project through cli 
```
ng new my-project-name --no-standalone
```
### Add Angular Materials
```
ng add @angular/material
Choose Custom theme
Set up global Angular Material typography styles: No
Do not include animations
```
### Clone this Repo into a Different Folder
```
git clone this_repo_url
```
Compare the strucuture of your Angular Project and the one you cloned. Add the missing folders and files.

