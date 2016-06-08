
function taskMaker(source, challengeId) {

  source.forEach((line) => {
    var rx = new RegExp('/\/\/DB ' + challengeId + '\/\/(.*)/g');
    var correct = rx.exec(line)
    console.log(correct)
  })
  

}

var source = ["ans = 0",
          "for i in range(n):",
          "    for j in range(n):",
          "    //DB 3//for j in range(1, n):",
          "    //DB 2//for j in range(n + 1):",
          "        ans += 1",
          "return ans"];
var challengeId = 3;

taskMaker(source,challengeId);