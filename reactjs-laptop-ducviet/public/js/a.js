function moveComponent(id) {
  const temp = $(`main`);

  const a = temp.getBoundingClientRect();
  temp.style.top = `${a.top + 220}px`;
}

function scrollToElement(id) {
  let top = $("#" + id + "").offset().top + 220;
  document.body.scrollTop = top;
  document.documentElement.scrollTop = top;
}
