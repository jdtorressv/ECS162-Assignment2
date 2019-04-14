function more(ReadMore, ReadLess, HiddenInfo, Footer) {
  let moreR = document.getElementById(ReadMore);
  moreR.classList.remove("LessContent");
  moreR.classList.add("MoreContent");
  let lessR = document.getElementById(ReadLess);
  lessR.classList.remove("LessContent");
  lessR.classList.add("MoreContent");
  let text = document.getElementById(HiddenInfo);
  text.classList.remove("LessContent");
  text.classList.add("MoreContent");
  let footer = document.getElementById(Footer);
  footer.classList.remove("LessContent");
  footer.classList.add("MoreContent");
}

function less(ReadMore, ReadLess, HiddenInfo, Footer) {
  let moreR = document.getElementById(ReadMore);
  moreR.classList.remove("MoreContent");
  moreR.classList.add("LessContent");
  let lessR = document.getElementById(ReadLess);
  lessR.classList.remove("MoreContent");
  lessR.classList.add("LessContent");
  let text = document.getElementById(HiddenInfo);
  text.classList.remove("MoreContent");
  text.classList.add("LessContent");
  let footer = document.getElementById(Footer);
  footer.classList.remove("MoreContent");
  footer.classList.add("LessContent");
}
