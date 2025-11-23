# Sudoku Web App

A React-based Sudoku game with two modes (6×6 and 9×9).  
The project includes multiple views, global state management using Context + Reducer,  
and additional features such as a timer, error checking, local storage, and a hint system.

---

## Features

- **Easy Mode (6×6)** and **Normal Mode (9×9)**
- Automatically generated puzzles with unique solutions
- Real-time error checking (row/column/sub-grid)
- Fixed cells, editable cells, and incorrect cell highlighting
- Timer that tracks play duration
- New Game / Reset Game controls
- **Hint system** (highlights a cell with only one valid number)
- **Local Storage support** — game state persists across refreshes
- **Responsive design** with a navigation bar
- Multiple static pages (Scores, Rules, Login, Register)

---

## Pages

- **Home** — game title + image  
- **Select** — links to Easy and Normal modes  
- **Easy Game** — 6×6 Sudoku  
- **Normal Game** — 9×9 Sudoku  
- **Rules** — basic Sudoku rules and credits  
- **Scores** — mock high score table  
- **Login / Register** — simple mock forms  

---

## Technology Stack

- **React** (functional components)
- **React Router**
- **Context + Reducer** for global state
- **LocalStorage** for persistence
- **CSS** for styling

---

## How to Run

```bash
npm install
npm start
```
The app will open at:
```bash
http://localhost:3000
```

---
## Credit

author: Hangkai Zhong