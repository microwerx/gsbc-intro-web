

/**
 *
 * @param {string} nodeId This is the id selector of the node to search for.
 * @param {string} newContent The new innerHTML data to set as the content.
 */
function setNodeContent(nodeId, newContent) {
    const node = document.getElementById(nodeId);
    if (!node) {
        return;
    }

    node.innerHTML = newContent;
}


/**
 *
 * @param {string} parentId
 * @param {string} parentUrl
 */
function loadContent(parentId, parentUrl) {
    const parentNode = document.getElementById(parentId);
    if (!parentNode) {
        return;
    }

    const httpRequest = new XMLHttpRequest()

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // Everything is good, the response was received.
            if (httpRequest.status == 200) {
                parentNode.innerHTML = httpRequest.responseText;
            } else {
                parentNode.innerHTML = "Error processing AJAX request";
            }
        } else {
            // Not ready yet.
        }
    };

    httpRequest.open('GET', parentUrl, true);
    httpRequest.send();
}

let diceCounts = [0, 0, 0, 0, 0, 0];
let pairCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns the result of the die roll with the range [a, b]
 */
function rollDie(a, b) {
    const roll = Math.floor(Math.random() * (b - a + 1) + a);
    diceCounts[roll - 1]++;
    //myChart.data.datasets[0].data[roll - 1]++;
    return roll;
}

/**
 *
 * @param {string} nodeId   The element to update.
 * @param {number} a        The first number of the range of the dice (e.g. 1, if 1 is the lowest number).
 * @param {number} b        The last number of the range of the dice (e.g. 7, if 6 is the highest number).
 */
function rollDice(nodeId, a, b) {
    const roll = rollDie(a, b);
    setNodeContent("dice" + roll.toString(), diceCounts[roll - 1]);
    setNodeContent(nodeId, roll.toString());
}


function rollDicePair(nodeId) {
    const roll1 = rollDie(1, 6);
    const roll2 = rollDie(1, 6);
    const sum = roll1 + roll2;
    pairCounts[sum - 2]++;
    setNodeContent("pair" + sum.toString(), pairCounts[sum - 2]);
    setNodeContent(nodeId, sum.toString());
}

function roll100DicePairs() {
    for (let i = 0; i < 100; i++)
        rollDicePair('pairContent')
    const xValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    const yValues = pairCounts;
    const barColors = ["red", "green", "blue", "orange", "brown", "magenta", "red", "green", "blue", "orange", "brown"];
    const myChart = new Chart("myChart", {
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
}
