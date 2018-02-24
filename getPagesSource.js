function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return html;
}

function classFinder(document_root) {

    // xpath to the main table, relative to document_root
    var table_xpath = '//*[@id="service_content"]/div[1]/table';
    var table_element = getElementByXpathFromRoot(table_xpath);


    // get rows
    var rows = table_element.getElementsByTagName('tr');
/*
    // iterate over the rows (skip the first one)
    for () {
        row.innerText();
    }
    */
    // gets certain class (table data)
    var row = rows[1].getElementsByTagName('td')
    // gets class Unique
    row[0].innerText
    // iterate through rows to find each class
    // iterate through row of rows to find Unique Name...
    return DOMtoString(rows);
}

function getElementByXpathFromRoot(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

    
function getElementByXpath(parent_element, path) {
    return document.evaluate(path, parent_element, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

/*
function getNodesbyElement(parent_element, path)
    var children = parent_element.childNodes;
    for(child in children){
        if(children[child]=);
    }*/




// action being sent
//chrome.runtime.sendMessage({
    // request.action
  //  action: "getSource",
    // this is request.source
   // source: document
//});



chrome.runtime.sendMessage({
    action: "getSource",
    source: classFinder(document)
});