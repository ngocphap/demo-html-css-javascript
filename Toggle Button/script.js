const toggleBtn = document.querySelector(".toggle-btn"),
  lockIcon = document.querySelector(".icon i"),
  iconBtn = document.querySelector(".toggle-btn .icon");

iconBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active"); // toggle add và remove khi click

  if (toggleBtn.classList.contains("active")) {
    return lockIcon.classList.replace("bxs-lock-open", "bxs-lock");
  }
  lockIcon.classList.replace("bxs-lock", "bxs-lock-open");
});
