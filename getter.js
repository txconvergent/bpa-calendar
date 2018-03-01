var nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  function(node) {
      return node.nodeName.toLowerCase() === 'p' ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
  }
);
var pars = [];
var currentNode;

while (currentNode = nodeIterator.nextNode()) {
pars.push(currentNode);
}