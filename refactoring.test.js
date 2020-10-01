const [invoice] = require('./invoices.json');
const plays = require('./plays.json');
const statement = require('./refactoring');

describe('Refactoring', () => {
    const expected = `Statement for BigCo
Hamlet: $650.00 (55 seats)
As You Like It: $580.00 (35 seats)
Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`
    it('should return order statement', function () {
        const actual = statement(invoice, plays);
        expect(actual).toBe(expected);
    });
});
