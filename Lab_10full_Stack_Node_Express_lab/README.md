# Lab 10 – Full Stack Node.js + Express.js
**Air University | BSSE-VI | Instructor: Mr. Sharif Hussain**

---

## 📁 File Structure

```
Lab_10full_Stack_Node_Express_lab/
│
├── package.json
│
├── ── Lab Example Files ──
├── file1_webserver.js       → Section 4:  Basic HTTP Web Server
├── file2_client_server.js   → Section 3:  GET & POST Communication
├── file3_modules.js         → Section 5:  Modules & NPM (fs module)
├── file4_async.js           → Section 6&7: Async I/O + Non-blocking Code
├── file5_json.js            → Section 8:  JSON Read & Send Data
├── fileexpress.js           → Section 9:  Express.js Basic Server
├── file6_rest_api.js        → Section 10: Full REST API (CRUD)
│
└── ── Lab Tasks ──
    ├── task1_student_list.js    → Task 1: Student List Display (GET)
    ├── task2_message_routes.js  → Task 2: Message Routes (/home, /about, /contact)
    ├── task3_dynamic_user.js    → Task 3: Dynamic User Page (/user/:name)
    └── task4_html_renderer.js   → Task 4: Full HTML Page Renderer
```

---

## ⚙️ Setup

```bash
npm install
```

---

## ▶️ How to Run Each File

| File | Command | URL |
|------|---------|-----|
| file1_webserver.js | `node file1_webserver.js` | http://localhost:3000 |
| file2_client_server.js | `node file2_client_server.js` | http://localhost:3000/users |
| file3_modules.js | `node file3_modules.js` | http://localhost:3000 |
| file4_async.js | `node file4_async.js` | http://localhost:3000/file or /delay |
| file5_json.js | `node file5_json.js` | http://localhost:3000 |
| fileexpress.js | `node fileexpress.js` | http://localhost:3000 |
| file6_rest_api.js | `node file6_rest_api.js` | http://localhost:3000/users |
| **task1_student_list.js** | `node task1_student_list.js` | http://localhost:3001/students |
| **task2_message_routes.js** | `node task2_message_routes.js` | http://localhost:3002/home |
| **task3_dynamic_user.js** | `node task3_dynamic_user.js` | http://localhost:3003/user/Ali |
| **task4_html_renderer.js** | `node task4_html_renderer.js` | http://localhost:3004 |

---

## 📋 Lab Tasks Summary

### Task 1 – Student List Display (GET Only)
- Express server with `/students` route
- Displays 5 students from an array as HTML `<li>` items
- Port: **3001**

### Task 2 – Simple Message Routes System
- Routes: `/home`, `/about`, `/contact`
- Each route shows a styled message page with navigation bar
- Port: **3002**

### Task 3 – Dynamic User Page
- Route: `/user/:name`
- Example: visiting `/user/Ali` displays **"Hello, Ali!"**
- Port: **3003**

### Task 4 – Simple HTML Page Renderer
- Route: `/`
- Returns a complete styled HTML page with title, paragraph, and a topic list
- Port: **3004**
