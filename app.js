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
  grid.innerHTML = "";

  if (data.length === 0) {
    document.getElementById("no-results").classList.remove("hidden");
    return;
  }

  document.getElementById("no-results").classList.add("hidden");

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
  const searchValue = document
    .getElementById("search-input")
    .value
    .toLowerCase();

  const filtered = collaborators.filter(user =>
    user.name.toLowerCase().includes(searchValue) ||
    user.field.toLowerCase().includes(searchValue) ||
    user.skills.join(" ").toLowerCase().includes(searchValue) ||
    user.interests.join(" ").toLowerCase().includes(searchValue)
  );

  displayCollaborators(filtered);
}
window.onload = () => {
  displayCollaborators(collaborators);
};