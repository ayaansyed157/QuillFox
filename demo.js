const form = document.querySelector("#signup");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.reset();
  window.location.assign(form.action);
});
