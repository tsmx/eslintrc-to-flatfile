// defining a test helper function
// 'expect' is not declared here but should NOT be highlighted as it comes with ...globals.jest


module.exports.testEquality = function (valueA, valueB) {
    expect(valueA).toEqual(valueB);
};