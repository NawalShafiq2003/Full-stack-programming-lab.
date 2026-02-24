// ── ES6 Class ──────────────────────────────────────────────────────────
class Student {
  constructor(id, name, semester, courses) {
    this.id       = id;
    this.name     = name;
    this.semester = semester;
    this.courses  = courses; // array
  }

  getSummary() {
    return `${this.name} is enrolled in Semester ${this.semester} with ${this.courses.length} course(s).`;
  }
}

// ── Student objects using const ────────────────────────────────────────
const students = [
  new Student(101, "Ali Hassan",  4, ["Web Development", "OOP", "DBMS"]),
  new Student(102, "Sara Khan",   6, ["Artificial Intelligence", "Machine Learning", "Data Mining", "Python"]),
  new Student(103, "Umar Farooq", 2, ["Calculus", "Intro to CS", "English"]),
];

// ── Render all students dynamically using innerHTML ────────────────────
const grid = document.getElementById("studentGrid");

students.forEach((student) => {
  let initial    = student.name.charAt(0);
  let courseTags = student.courses
    .map(c => `<span class="course-tag">${c}</span>`)
    .join("");

  // Template literal builds the full card HTML
  grid.innerHTML += `
    <div class="card">
      <div class="card-header">
        <div class="avatar">${initial}</div>
        <div>
          <h2>${student.name}</h2>
          <div class="student-id">ID: ${student.id}</div>
        </div>
      </div>

      <div class="info-row">
        <span class="label">Semester</span>
        <span class="semester-pill">Semester ${student.semester}</span>
      </div>
      <div class="info-row">
        <span class="label">Total Courses</span>
        <span class="value">${student.courses.length}</span>
      </div>

      <div class="courses-section">
        <div class="courses-label">Enrolled Courses</div>
        <div class="course-tags">${courseTags}</div>
      </div>

      <p class="summary">${student.getSummary()}</p>
    </div>
  `;
});
