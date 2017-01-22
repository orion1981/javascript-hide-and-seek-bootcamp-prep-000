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
  rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML) + n).toString()
}
}

function deepestChild() {
  var firstChild = document.querySelectorAll("#grand-node")
  while (firstChild.children) {
    firstChild = firstChild.children
  }
return firstChild[0]
  }
