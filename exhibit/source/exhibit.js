function more(ReadMore, ReadLess, HiddenInfo, Footer, Space, Mobile) {
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
  let space = document.getElementById(Space);
  space.classList.remove("LessContent");
  space.classList.add("MoreContent");
  let mobile = document.getElementById(Mobile);
  mobile.classList.remove("LessContent");
  mobile.classList.add("MoreContent");
}

function less(ReadMore, ReadLess, HiddenInfo, Footer, Space, Mobile) {
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
  let space = document.getElementById(Space);
  space.classList.remove("MoreContent");
  space.classList.add("LessContent");
  let mobile = document.getElementById(Mobile);
  mobile.classList.remove("MoreContent");
  mobile.classList.add("LessContent"); 
}
