// defining a test hlper function
// 'expect' is not declared here but should NOT be highlighted as it comes with Jest


module.exports.testEquality = function (valueA, valueB) {
    expect(valueA).toEqual(valueB);
};