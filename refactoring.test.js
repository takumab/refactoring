const statement = require('./refactoring');



describe('Refactoring', () => {
    const [plays] =  [
       {
           "hamlet": {
               "name": "Hamlet",
               "type": "tragedy"
           },
           "as-like": {
               "name": "As You Like It",
               "type": "comedy"
           },
           "othello": {
               "name": "Othello",
               "type": "tragedy"
           }
       }
   ]

    const [invoice] =  [
        {
            "customer": "Customer 1",
            "performances": [
                {
                    "playID": "hamlet",
                    "audience": 55
                },
                {
                    "playID": "as-like",
                    "audience": 35
                },
                {
                    "playID": "othello",
                    "audience": 40
                }
            ]
        }
    ]



    it('should return order statement', function () {
        // arrange
        const expected = `Statement for Customer 1\nHamlet: $650.00 (55 seats)\nAs You Like It: $580.00 (35 seats)\nOthello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`
        // act
        const actual = statement(invoice, plays);
        // assert
        expect(actual).toBe(expected);
    });
});
