# Lab 06 — React JS Frontend
## State, Event Handling, and React Routing
**Course:** Full Stack Programming | **Instructor:** Mr. Sharif Hussain

---

## Projects Overview

| Folder | App Name | Concepts |
|--------|----------|----------|
| task1-counter-app | counter-app | React State (useState) |
| task2-user-form-app | user-form-app | State + Event Handling |
| task3-event-app | event-app | onClick, onMouseOver, onMouseOut |
| task4-routing-app | routing-app | React Router DOM |

---

## How to Run Each Project

### Prerequisites
Make sure Node.js and npm are installed:
```
node --version
npm --version
```

### Task 1 — Counter App
```bash
cd task1-counter-app
npm install
npm start
```

### Task 2 — User Form App
```bash
cd task2-user-form-app
npm install
npm start
```

### Task 3 — Event App
```bash
cd task3-event-app
npm install
npm start
```

### Task 4 — Routing App
```bash
cd task4-routing-app
npm install
npm start
```

Each app runs on http://localhost:3000 by default.

---

## Task Descriptions

### Task 1: Counter App (React State)
- Component: `Counter`
- Uses `useState` to store count value
- Buttons: Increment, Decrement, Reset
- Prevents count from going below 0

### Task 2: User Form App (State + Event Handling)
- Component: `UserForm`
- Input fields: Name, Email
- Uses `onChange` to update state in real time
- Displays submitted data below the form
- Clears input fields after submission

### Task 3: Interactive Buttons App (Event Handling)
- Component: `Actions`
- Button 1: Show Message (onClick)
- Button 2: Change Background Color (onClick)
- Button 3: Show Alert (onClick)
- Text color changes on mouse hover (onMouseOver / onMouseOut)
- Live event log shows fired events

### Task 4: Multi-Page Website (React Routing)
- Uses `react-router-dom` v6
- Pages: Home, About, Contact Us, Products, 404 Not Found
- Navigation using `<Link>` component
- Routes configured with `<Routes>` and `<Route>`
- Products page includes Add to Cart functionality
- Contact page includes a working form
