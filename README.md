# Tic Tac Toe

A modern and responsive Tic Tac Toe game built with React. Two players take turns using **X** and **O** on the same device.

## Features

- Classic 3x3 Tic Tac Toe board
- Current-player status indicator
- Automatic winner detection
- Option to start a new game after a winner is determined
- Move history with the ability to return to previous moves
- Distinct colors for X and O
- Responsive design for mobile, tablet, and desktop screens
- Keyboard-friendly focus styles
- Animations that respect the user's reduced-motion preference

## Technologies

- [React](https://react.dev/)
- [React DOM](https://react.dev/reference/react-dom)
- [Create React App](https://create-react-app.dev/)
- CSS3

## Requirements

Make sure the following tools are installed before running the project:

- Node.js 18 or newer
- npm

You can check the installed versions with:

```bash
node --version
npm --version
```

## Installation

Open a terminal and navigate to the project directory:

```bash
cd TicTacToe
```

Install the project dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

Changes made to the source files while the development server is running will automatically appear in the browser.

## How to Play

1. The **X** player always goes first.
2. Players take turns selecting an empty square.
3. The first player to place three matching marks horizontally, vertically, or diagonally wins.
4. The move-history panel can be used to return to an earlier point in the game.
5. Once a winner is determined, select **Play again** to clear the board and move history.

## How It Works

The game state and move history are managed in `App.jsx`. Each move creates a copy of the current board and adds it to the history. This makes it possible to return safely to any previous move.

`Board.jsx` handles square interactions and checks for a winner after each move. `Square.jsx` represents the appearance and click behavior of each individual square.

After a winner is determined, no additional marks can be placed on the board. The **Play again** button resets the game state, move history, and player order to their initial values.

## Project Structure

```text
TicTacToe/
├── public/
│   └── index.html       # HTML template for the application
├── src/
│   ├── App.jsx          # Game state, move history, and restart behavior
│   ├── Board.jsx        # Game board, moves, and winner detection
│   ├── Square.jsx       # Individual game square
│   ├── index.jsx        # React application entry point
│   └── styles.css       # Global design and responsive styles
├── package.json         # Project scripts and dependencies
└── package-lock.json    # Locked dependency versions
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server. |
| `npm run build` | Creates an optimized production build. |
| `npm test` | Starts the test runner. |
| `npm run eject` | Copies the Create React App configuration into the project. This action cannot be undone. |

## Production Build

Create a production-ready version of the application with:

```bash
npm run build
```

The optimized files will be generated in the `build/` directory. This directory can be deployed to any hosting provider that supports static files.

## Tests

Start the test runner with:

```bash
npm test
```

The project currently does not contain automated test files. New tests can be added under `src/` using the `*.test.jsx` or `*.test.js` filename pattern.
