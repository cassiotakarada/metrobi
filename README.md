# Metrobi Coding Exercises

This repository contains 7 comprehensive coding exercises covering various algorithmic problems, data structures, and web development concepts.

## 📋 Table of Contents

1. [Exercise 1: Array Processing (1.js)](#exercise-1-array-processing-1js)
2. [Exercise 2: Array Delays (2.js)](#exercise-2-array-delays-2js)
3. [Exercise 3: React Layout App (3/layout-app/)](#exercise-3-react-layout-app-3layout-app)
4. [Exercise 4: Bracket Validation (4.js)](#exercise-4-bracket-validation-4js)
5. [Exercise 5: Two Eggs Problem (5.js)](#exercise-5-two-eggs-problem-5js)
6. [Exercise 6: Zeno's Paradox Animation (6.js)](#exercise-6-zenos-paradox-animation-6js)
7. [Exercise 7: Carrot Knapsack Problem (7.js)](#exercise-7-carrot-knapsack-problem-7js)

---

## Exercise 1: Array Processing (1.js)

**Problem**: Basic array manipulation and processing exercise.

**Features**:

- Array filtering and transformation
- Data processing algorithms
- JavaScript ES6+ features

**How to run**:

```bash
node 1.js
```

---

## Exercise 2: Array Delays (2.js)

**Problem**: Implement an array output system with exponential delays.

**Algorithm**: Each array element is displayed with exponentially increasing delays (2^i seconds).

**Features**:

- `writeArrayWithDelays()` function
- Mathematical progression (powers of 2)
- Asynchronous timing control

**Example**:

```javascript
// Outputs array elements with delays: 1s, 2s, 4s, 8s, 16s...
writeArrayWithDelays(["A", "B", "C", "D", "E"]);
```

**How to run**:

```bash
node 2.js
```

---

## Exercise 3: React Layout App (3/layout-app/)

**Problem**: Create a responsive web layout using React and CSS.

**Structure**:

```
┌─────────────────────────────────┐
│           Header                │
├─────────────┬───────────────────┤
│    Hero     │   Main Content    │
├─────────────┼───────────────────┤
│   Sidebar   │  Extra Content    │
└─────────────┴───────────────────┘
```

**Features**:

- **React Components**: Functional components with JSX
- **CSS Grid Layout**: Responsive design using CSS Grid
- **Modern Styling**: Clean, professional layout
- **Mobile Responsive**: Adapts to different screen sizes

**Technologies**:

- React 18
- CSS3 Grid
- Create React App

**How to run**:

```bash
cd 3/layout-app
npm install
npm start
```

**View**: Open [http://localhost:3000](http://localhost:3000)

---

## Exercise 4: Bracket Validation (4.js)

**Problem**: Validate if brackets in strings are properly opened and closed.

**Algorithm**: Stack-based validation using LIFO (Last In, First Out) principle.

**Supported Brackets**:

- `()` - Parentheses
- `[]` - Square brackets
- `{}` - Curly braces

**Features**:

- `isValidBrackets(string)` - Core validation function
- `analyzeFile(filename)` - Line-by-line file analysis
- Interactive file selection
- Visual feedback with emojis (✅❌)
- Error location reporting

**Example**:

```javascript
isValidBrackets("({[]})"); // ✅ true
isValidBrackets("([)]"); // ❌ false
isValidBrackets("((())"); // ❌ false - unclosed
```

**How to run**:

```bash
node 4.js
# Follow prompts to select test file
```

**Test file**: `test-brackets.js` contains intentional bracket errors for testing.

---

## Exercise 5: Two Eggs Problem (5.js)

**Problem**: Find the critical floor from which eggs break with minimum attempts using only 2 eggs.

**Classic Problem**: Given a 100-floor building and 2 eggs, find the highest floor from which an egg won't break.

**Algorithms Implemented**:

### 1. Optimal Mathematical Solution

- **Time Complexity**: O(√n)
- **Strategy**: Start at floor √(2n), then linear search
- **Result**: ~14 attempts maximum

### 2. Dynamic Programming Solution

- **Time Complexity**: O(n²)
- **Space Complexity**: O(n²)
- **Strategy**: Builds optimal solution table for any number of floors/eggs

**Features**:

- Interactive floor input
- Dual algorithm comparison
- Step-by-step attempt tracking
- Mathematical analysis of both approaches

**Example Output**:

```
🥚 TWO EGGS PROBLEM SOLVER
Critical floor: 87
Mathematical approach: 13 attempts
DP approach: 13 attempts
```

**How to run**:

```bash
node 5.js
```

---

## Exercise 6: Zeno's Paradox Animation (6.js)

**Problem**: Visualize and resolve Zeno's Paradox of Achilles and the Tortoise.

**Paradox**: Achilles can never catch the tortoise because he must first reach where the tortoise was, but by then the tortoise has moved forward.

**Features**:

### Terminal Animation

- ASCII art visualization
- Step-by-step progression
- Real-time position tracking
- Mathematical resolution explanation

### Web Animation (HTML)

- Interactive browser visualization
- Smooth animations
- Mathematical graphs
- Professional styling

**Algorithms**:

- Geometric series convergence
- Position calculation using ratios
- Time-based progression simulation

**Parameters**:

- Achilles speed: 10 units/second
- Tortoise speed: 5 units/second
- Tortoise head start: 100 units

**How to run**:

```bash
node 6.js
# Choose: Terminal animation OR Web HTML generation
```

**Result**: Demonstrates that infinite steps converge to finite time (20 seconds).

---

## Exercise 7: Carrot Knapsack Problem (7.js)

**Problem**: Maximize value in a weight-limited bag with unlimited carrots of different types.

**Algorithm**: Unbounded Knapsack using Dynamic Programming.

**Input Example**:

```javascript
carrotTypes = [
  { kg: 5, price: 100 }, // $20 per kg
  { kg: 7, price: 150 }, // $21.43 per kg
  { kg: 3, price: 70 }, // $23.33 per kg (best ratio)
];
capacity = 36; // kg
```

**Features**:

- `getMaxValue(carrotTypes, capacity)` - Returns maximum possible value
- `getMaxValueWithDetails(carrotTypes, capacity)` - Returns value + selection details
- Multiple test scenarios
- Value-to-weight ratio analysis
- Optimal selection breakdown

**Algorithm Complexity**:

- **Time**: O(n × capacity)
- **Space**: O(capacity)

**Example Result**:

```
🥕 CARROT KNAPSACK PROBLEM
Maximum value: $840
Optimal: 12x Type 3 carrots (3kg, $70 each)
Total weight: 36kg
```

**How to run**:

```bash
node 7.js
```

---

## 🛠️ Setup & Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Quick Start

```bash
# Clone or download the repository
cd metrobi

# Run any JavaScript exercise
node 1.js
node 2.js
node 4.js
node 5.js
node 6.js
node 7.js

# For React app (Exercise 3)
cd 3/layout-app
npm install
npm start
```

---

## 🧪 Testing

### Bracket Validation Testing

```bash
node 4.js
# Select 'test-brackets.js' when prompted
```

### All Exercises

Each exercise includes comprehensive testing scenarios and examples.

---

## 📚 Technical Concepts Covered

| Exercise | Concepts                                              |
| -------- | ----------------------------------------------------- |
| 1        | Array Processing, ES6+                                |
| 2        | Asynchronous Programming, Mathematical Progressions   |
| 3        | React, CSS Grid, Component Architecture               |
| 4        | Stack Data Structure, String Processing, File I/O     |
| 5        | Dynamic Programming, Mathematical Optimization        |
| 6        | Mathematical Series, Animation, HTML Generation       |
| 7        | Knapsack Algorithm, Dynamic Programming, Optimization |

---

## 🏗️ Project Structure

```
metrobi/
├── 1.js                    # Array Processing
├── 2.js                    # Array Delays
├── 3/
│   └── layout-app/         # React Layout App
│       ├── src/
│       ├── public/
│       └── package.json
├── 4.js                    # Bracket Validation
├── 5.js                    # Two Eggs Problem
├── 6.js                    # Zeno's Paradox
├── 7.js                    # Carrot Knapsack
├── test-brackets.js        # Test file for Exercise 4
├── zenos-paradox.html      # Generated by Exercise 6
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

---

## 🎯 Key Learning Outcomes

- **Algorithm Design**: Dynamic Programming, Stack Operations, Mathematical Optimization
- **Data Structures**: Arrays, Stacks, Hash Maps
- **Web Development**: React Components, CSS Grid, HTML5
- **Problem Solving**: Classical CS problems (Knapsack, Eggs, Zeno's Paradox)
- **JavaScript Mastery**: ES6+, Async/Await, File Operations, Interactive CLI

---

## 📄 License

This project is created for educational and demonstration purposes.

---

**Happy Coding! 🚀**
