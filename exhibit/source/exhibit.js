function disappear(read, text, footer) {
  let readDiv = document.getElementById(read);
  readDiv.style.display = "none";
  let textDiv = document.getElementById(text);
  textDiv.style.display = "flex";
  let footerDiv = document.getElementById(footer);
  footerDiv.style.display = "flex";
}

function appear(read, text, footer) {
  let readDiv = document.getElementById(read);
  readDiv.style.display = "flex";
  let textDiv = document.getElementById(text);
  textDiv.style.display = "none";
  let footerDiv = document.getElementById(footer);
  footerDiv.style.display = "none";
}
