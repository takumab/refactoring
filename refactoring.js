


function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD", maximumFractionDigits: 2}).format;
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        let result = 0;
        switch (playFor(aPerformance).type) {
            case "tragedy":
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default: throw new Error(`Unknown type: ${playFor(aPerformance).type}`);
        }
        return result;
    }

    for (let performance of invoice.performances) {
        let thisAmount = amountFor(performance);

        // add volume credits
        volumeCredits += Math.max(performance.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === playFor(performance).type) {
            volumeCredits += Math.floor(performance.audience / 5);
        }

        // print line for this order
        result += `${playFor(performance).name}: ${format(thisAmount / 100)} (${performance.audience} seats)\n`;
        totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount / 100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}




module.exports = statement;
