function groupByYearOfDeath(data) {
    var groupData = {},
        deathYear;
    data.forEach(function(person) {
        deathYear = getCentury(person.died);
        if (!groupData[deathYear]) {
            groupData[deathYear] = [person.died - person.born];
        } else {
            groupData[deathYear].push(person.died - person.born);
        }
    });
    return groupData;
}

function getCentury(year) {
    return Math.ceil(year / 100);
}

function average(arr) {
    function sum(a, b) {
        return a + b;
    }
    return arr.reduce(sum) / arr.length;
}

function lifeExpectancy(dataStr) {
    var data = JSON.parse(dataStr);
    var groupData = groupByYearOfDeath(data);
    for (var key in groupData) {
        groupData[key] = average(groupData[key]);
    }
    return groupData;
}

module.exports = lifeExpectancy;
