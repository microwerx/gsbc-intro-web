

/**
 * @param{number} n
 * @returns{string[]}
 */
function fizzbuzz(n) {
    var values = []
    for (let i = 1; i <= n; i++) {
        var isMultipleOfThree = (i % 3 == 0)
        var isMultipleOfFive = (i % 5 == 0)

        if (isMultipleOfFive && isMultipleOfThree) {
            values.push("FizzBuzz")
        }
        else if (isMultipleOfThree) {
            values.push("Fizz")
        }
        else if (isMultipleOfFive) {
            values.push("Buzz")
        }
        else {
            values.push(i.toString())
        }
    }
    return values
}

// Calculate the results of Fizz Buzz for all the numbers to 50.
var results = fizzbuzz(50)

// Print the results by appending paragraph nodes to the document body.
for (var result of results)
{
    let textNode = document.createElement("p")
    textNode.textContent = result
    document.body.appendChild(textNode)
}
