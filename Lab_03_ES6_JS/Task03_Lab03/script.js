// ── Promise-based async function ──────────────────────────────────────────
function fetchUsers(shouldFail) {
  return new Promise(function (resolve, reject) {

    // Countdown timer display
    let seconds = 3;
    const countdownEl = document.getElementById("countdown");

    const interval = setInterval(() => {
      seconds--;
      if (countdownEl) {
        countdownEl.textContent = seconds > 0
          ? `Completing in ${seconds}s...`
          : "Finishing up...";
      }
    }, 1000);

    // setTimeout simulates a 3-second server delay
    setTimeout(function () {
      clearInterval(interval);

      // Boolean flag controls resolve or reject
      if (shouldFail) {
        reject("Server Error 500: Failed to load user data. Please try again.");
      } else {
        resolve([
          { id: 1, name: "Ali Hassan",   email: "ali@uni.edu",   role: "admin"  },
          { id: 2, name: "Sara Khan",    email: "sara@uni.edu",  role: "editor" },
          { id: 3, name: "Umar Farooq", email: "umar@uni.edu",  role: "viewer" },
          { id: 4, name: "Hina Malik",  email: "hina@uni.edu",  role: "editor" },
          { id: 5, name: "Bilal Ahmed", email: "bilal@uni.edu", role: "viewer" },
        ]);
      }
    }, 3000);
  });
}

// ── Load Data (called on button click) ────────────────────────────────────
function loadData() {
  const btn        = document.getElementById("loadBtn");
  const statusEl   = document.getElementById("status");
  const userListEl = document.getElementById("userList");
  const shouldFail = document.getElementById("failToggle").checked;

  // Reset
  btn.disabled    = true;
  userListEl.innerHTML = "";

  // Show loading state
  statusEl.innerHTML = `
    <div class="loading-inner">
      <div class="spinner"></div>
      <div class="loading-text">
        <div class="main-text">Fetching users from server...</div>
        <div class="countdown" id="countdown">Starting in 3s...</div>
      </div>
    </div>
  `;

  // ── .then() handles success, .catch() handles failure ─────────────────
  fetchUsers(shouldFail)
    .then(function (users) {
      statusEl.innerHTML = `
        <div class="success-msg">
          <span class="icon">✅</span>
          <span>${users.length} users loaded successfully via Promise.resolve()</span>
        </div>
      `;

      // Render each user card with staggered animation
      users.forEach((user, i) => {
        const initial   = user.name.charAt(0);
        const roleClass = `role-${user.role}`;
        const delay     = i * 100;
        setTimeout(() => {
          userListEl.innerHTML += `
            <div class="user-card" style="animation-delay: 0ms">
              <div class="user-avatar">${initial}</div>
              <div>
                <div class="user-name">${user.name}</div>
                <div class="user-meta">ID: ${user.id} &nbsp;·&nbsp; ${user.email}</div>
              </div>
              <span class="role-badge ${roleClass}">${user.role}</span>
            </div>
          `;
        }, delay);
      });
    })
    .catch(function (errorMsg) {
      statusEl.innerHTML = `
        <div class="error-msg">
          <span class="icon">❌</span>
          <span>${errorMsg}</span>
        </div>
      `;
    })
    .finally(function () {
      btn.disabled = false;
    });
}
