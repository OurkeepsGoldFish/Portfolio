const cards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    const desc = card.querySelector("p").innerText;

    modalTitle.innerText = title;
    modalDesc.innerText = desc;

    modal.classList.add("active");
  });
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// close when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});