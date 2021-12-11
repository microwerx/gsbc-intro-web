

/**
 *
 * @param {string} parentId
 * @param {string} parentUrl
 */
function loadContent(parentId, parentUrl) {
    var parentNode = document.getElementById(parentId)
    if (!parentNode) {
        return
    }

    var httpRequest = new XMLHttpRequest()

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // Everything is good, the response was received.
            if (httpRequest.status == 200) {
                parentNode.innerHTML = httpRequest.responseText
            } else {
                parentNode.innerHTML = "Error processing AJAX request"
            }
        } else {
            // Not ready yet.
        }
    };

    httpRequest.open('GET', parentUrl, true);
    httpRequest.send();
}
