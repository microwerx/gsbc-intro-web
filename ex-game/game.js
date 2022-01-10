

/**
 *
 * @param {string} nodeId This is the id selector of the node to search for.
 * @param {string} newContent The new innerHTML data to set as the content.
 */
function setNodeContent(nodeId, newContent) {
    var node = document.getElementById(nodeId)
    if (!node) {
        return
    }

    node.innerHTML = newContent
}


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

var diceCounts = [0, 0, 0, 0, 0, 0]
var pairCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns the result of the die roll with the range [a, b)
 */
function rollDie(a, b) {
    var roll = Math.floor(Math.random() * (b - a) + a)
    diceCounts[roll-1]++
    myChart.data.datasets[0].data[roll-1]++
    return roll
}

/**
 *
 * @param {string} nodeId   The element to update.
 * @param {number} a        The first number of the range of the dice (e.g. 1, if 1 is the lowest number).
 * @param {number} b        The last number of the range of the dice (e.g. 7, if 6 is the highest number).
 */
function rollDice(nodeId, a, b) {
    var roll = rollDie(a, b)
    setNodeContent("dice" + roll.toString(), diceCounts[roll-1])
    setNodeContent(nodeId, roll.toString())
}


function rollDicePair(nodeId) {
    var roll1 = rollDie(1, 7)
    var roll2 = rollDie(1, 7)
    var sum = roll1 + roll2
    pairCounts[sum-1]++
    setNodeContent("pair" + sum.toString(), pairCounts[sum-1])
    setNodeContent(nodeId, sum.toString())
}


var xValues = ["1", "2", "3", "4", "5", "6"];
var yValues = [100, 200, 300, 400, 300, 200];
var barColors = ["red", "green","blue","orange","brown", "magenta"];
var myChart = new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {}
  });
