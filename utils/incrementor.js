function incrementExperience(yearOfBeginning) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBeginning;
}

function incrementOncePerMonth(valueNow, lastMonth, minIncrement, maxIncrement) {
    const isNewMonth = new Date().getMonth() !== lastMonth;
    if (isNewMonth) {
        const randomIncrement = Math.floor(Math.random() * (maxIncrement - minIncrement + 1)) + minIncrement;
        return valueNow + randomIncrement;
    }
    return valueNow;
}

function incrementHappyClients(happyClientsNow, lastMonth) {
    return incrementOncePerMonth(happyClientsNow, lastMonth, 15, 35);
}

function incrementReviews(reviewsNow, lastMonth) {
    return incrementOncePerMonth(reviewsNow, lastMonth, 5, 15);
}

function incrementCapital(capitalNow, lastMonth) {
    return incrementOncePerMonth(capitalNow, lastMonth, 500, 1500);
}

export { incrementExperience, incrementHappyClients, incrementReviews, incrementCapital };
