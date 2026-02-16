const countEl = document.getElementById("count");
const addEl = document.getElementById("add");
const removeEl = document.getElementById("remove");
addEl.addEventListener("click", function () {
  countEl.innerText = Number(countEl.innerText) + 1;
});
removeEl.addEventListener("click", function () {
  if (Number(countEl.innerText) > 0) {
    countEl.innerText = Number(countEl.innerText) - 1;
  }
});
