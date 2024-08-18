const addOne = require('../app');
const { testEquality } = require('./test-utils');

describe('seslintrc-to-flatfile test suite', () => {

    it('tests addOne function', () => {
        testEquality(addOne(4), 5);
    });

});