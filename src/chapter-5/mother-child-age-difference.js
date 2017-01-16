function average(arr) {
    function sum(a, b) {
        return a + b;
    }
    return arr.reduce(sum) / arr.length;
}

function getDataByName(data) {
    var dataByName = {};
    data.forEach(function(person) {
        dataByName[person.name] = person;
    });
    return dataByName;
}

function getAgeDiff(data, dataByName) {
    var ageDiffArr = [],
        motherData;
    data.forEach(function(person) {
        motherData = dataByName[person.mother];
        if (motherData) {
            ageDiffArr.push(person.born - motherData.born);
        }
    });
    return ageDiffArr;
}

function avgAgeDiff(dataStr) {
    var dataByName = {},
        ageDiffArr = [],
        data = JSON.parse(dataStr),
        avgAgeDiff;
    dataByName = getDataByName(data);
    ageDiffArr = getAgeDiff(data, dataByName);
    avgAgeDiff = average(ageDiffArr).toFixed(1);
    avgAgeDiff = parseFloat(avgAgeDiff);
    return avgAgeDiff;
}

module.exports = avgAgeDiff;
