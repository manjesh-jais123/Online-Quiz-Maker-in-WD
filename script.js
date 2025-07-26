function addQuestion() {
  const container = document.getElementById("questionsContainer");
  const qCount = container.children.length + 1;

  const questionHTML = `
    <div class="question-block">
      <input type="text" placeholder="Question ${qCount}" required />
      <input type="text" placeholder="Option A" required />
      <input type="text" placeholder="Option B" required />
      <input type="text" placeholder="Option C" required />
      <input type="text" placeholder="Option D" required />
      <input type="text" placeholder="Correct Answer (A/B/C/D)" required />
    </div>
  `;
  container.insertAdjacentHTML('beforeend', questionHTML);
}

function login() {
  alert("Login functionality coming soon!");
}

function register() {
  alert("Register functionality coming soon!");
}
