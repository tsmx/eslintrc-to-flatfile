// unused var, should be highlighted
var unused = 1234;

// function is never used, should be highlighted
function addToString(input) {
    let result = '';
    // wrong string quotation sign (double instead of single), should be highlighted
    let stringToAdd = ", World!";
    switch (input) {
      // case-statement not indented correctly, should be highlighted
    case 'Hello': 
        result = input + stringToAdd;
        break;
        default:
            result = input;
    }
    // wrong indentation (2 instead of 4 spaces),  should be highlighted
  return result;
}

// parameter input2 never used and not prefixed with '_', should be highlighted
// parameter input3 never used but prefixed with '_', should be ok
function addOne(input, input2, _input3) {
    // missing semicolon, should be highlighted
    return input + 1
}

module.exports = addOne;

