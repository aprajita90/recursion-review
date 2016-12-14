// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    // your code here
    var results = [];

    var getToChildNode = function(node) {
        if (node.classList.contains(className)) {//node.className.split(" ").indexOf()(className)>=0
            results.push(node);
        }
        for (var i = 0; i < node.children.length; i++) {
            getToChildNode(node.children[i]);//recursive over child
        }
    };
    getToChildNode(document.body);//recurse first time

    return results;//retur saved the mode
};


