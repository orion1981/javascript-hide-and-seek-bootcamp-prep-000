function getFirstSelector(selector) {
var myAnswer = document.querySelector(selector)
  return myAnswer
}

function nestedTarget() {
  return document.querySelector("#nested .target");

}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll("ul.ranked-list li")
  for (let i = 0, k = rankedLists.length; i < k; i++) {
  rankedLists[i].innerHtml = (parseInt(rankedLists[i].innerHtml) + n).toString()
}
}

function deepestChild() {

}
