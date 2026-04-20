// ------------------ COLLABORATORS ------------------

const collaborators = [
  {
    name: "Aarav Sharma",
    field: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "Deep Learning"],
    interests: ["Computer Vision", "NLP"]
  },
  {
    name: "Priya Mehta",
    field: "Web Development",
    skills: ["React", "Node.js", "MongoDB"],
    interests: ["Full Stack", "UI/UX"]
  },
  {
    name: "Rohan Kulkarni",
    field: "Cybersecurity",
    skills: ["Ethical Hacking", "Networking"],
    interests: ["Cryptography", "Security"]
  },
  {
    name: "Sneha Patil",
    field: "Data Science",
    skills: ["Python", "Pandas", "ML"],
    interests: ["Data Analysis", "Visualization"]
  }
];

function displayCollaborators(data) {
  const grid = document.getElementById("collab-grid");
  const noResults = document.getElementById("no-results");

  if (!grid) return;

  grid.innerHTML = "";

  if (!data || data.length === 0) {
    if (noResults) noResults.classList.remove("hidden");
    return;
  }

  if (noResults) noResults.classList.add("hidden");

  data.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("collab-card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Field:</strong> ${user.field}</p>
      <p><strong>Skills:</strong> ${user.skills.join(", ")}</p>
      <p><strong>Interests:</strong> ${user.interests.join(", ")}</p>
      <button class="connect-btn">Connect</button>
    `;

    grid.appendChild(card);
  });
}

function filterCollaborators() {
  const input = document.getElementById("search-input");
  if (!input) return;

  const searchValue = input.value.toLowerCase();

  const filtered = collaborators.filter(user =>
    user.name.toLowerCase().includes(searchValue) ||
    user.field.toLowerCase().includes(searchValue) ||
    user.skills.join(" ").toLowerCase().includes(searchValue) ||
    user.interests.join(" ").toLowerCase().includes(searchValue)
  );

  displayCollaborators(filtered);
}


// ------------------ IDEA BOARD ------------------

let ideas = JSON.parse(localStorage.getItem("ideas")) || [];

function displayIdeas(data) {
  const grid = document.getElementById("ideas-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!data || data.length === 0) {
    grid.innerHTML = "<p>No ideas posted yet.</p>";
    return;
  }

  data.forEach(idea => {
    const card = document.createElement("div");
    card.classList.add("idea-card");

    card.innerHTML = `
      <h3>${idea.title}</h3>
      <p>${idea.desc}</p>
      <p><strong>Field:</strong> ${idea.field}</p>
      <p><strong>By:</strong> ${idea.author}</p>
    `;

    grid.appendChild(card);
  });
}

function postIdea() {
  const title = document.getElementById("idea-title")?.value.trim();
  const desc = document.getElementById("idea-desc")?.value.trim();
  const field = document.getElementById("idea-field")?.value.trim();
  const author = document.getElementById("idea-author")?.value.trim();
  const msg = document.getElementById("idea-msg");

  if (!title || !desc || !field || !author) {
    if (msg) {
      msg.textContent = "Please fill all fields!";
      msg.classList.remove("hidden");
    }
    return;
  }

  const newIdea = { title, desc, field, author };

  ideas.push(newIdea);
  localStorage.setItem("ideas", JSON.stringify(ideas));

  displayIdeas(ideas);

  document.getElementById("idea-title").value = "";
  document.getElementById("idea-desc").value = "";
  document.getElementById("idea-field").value = "";
  document.getElementById("idea-author").value = "";

  if (msg) {
    msg.textContent = "Idea posted successfully!";
    msg.classList.remove("hidden");
  }
}

function filterIdeas() {
  const input = document.getElementById("idea-search");
  if (!input) return;

  const search = input.value.toLowerCase();

  const filtered = ideas.filter(idea =>
    idea.title.toLowerCase().includes(search) ||
    idea.field.toLowerCase().includes(search) ||
    idea.author.toLowerCase().includes(search)
  );

  displayIdeas(filtered);
}


// ------------------ MAIN LOAD HANDLER ------------------

document.addEventListener("DOMContentLoaded", () => {

  // Collaborators Page
  if (document.getElementById("collab-grid")) {
    displayCollaborators(collaborators);

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", filterCollaborators);
    }
  }

  // Idea Board Page
  if (document.getElementById("ideas-grid")) {
    displayIdeas(ideas);

    const ideaSearch = document.getElementById("idea-search");
    if (ideaSearch) {
      ideaSearch.addEventListener("input", filterIdeas);
    }
  }

});