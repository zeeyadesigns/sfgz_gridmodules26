const text = document.getElementById("wartet");
const knopf = document.getElementById("knopf");

knopf.addEventListener("click", function () {
  text.hidden = false;

  const breite = knopf.offsetWidth;
  const hoehe = knopf.offsetHeight;
  knopf.hidden = true;

  setTimeout(function () {
    const maxLinks = Math.max(12, window.innerWidth - breite - 12);
    const maxOben = Math.max(12, window.innerHeight - hoehe - 12);

    knopf.classList.add("umgezogen");
    knopf.style.left = (12 + Math.random() * (maxLinks - 12)) + "px";
    knopf.style.top = (12 + Math.random() * (maxOben - 12)) + "px";
    knopf.hidden = false;
  }, 2000);
});