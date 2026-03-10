# Lab Task 2: Course List App

**Course:** Full Stack Programming — Lab 05 (Frontend React JS)  
**Instructor:** Mr. Sharif Hussain  
**Class:** BSSE-VI-B & A

## Objective
Render lists dynamically using props and the `.map()` method.

## Features
- `CourseItem` reusable functional component
- Props: `courseName`, `instructor`, `duration`, `courseType` (bonus)
- 5 courses rendered from an array using `.map()`
- Color-coded Online (blue) / Offline (orange) badges
- Hover slide animation on each course card

## How to Run

```bash
npm install
npm start
```

Then open http://localhost:3000 in your browser.

## Project Structure

```
course-list-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js        ← Main component (CourseItem + Badge + App)
│   └── index.js      ← React entry point
└── package.json
```
