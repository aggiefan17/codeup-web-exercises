var objects = [
    {
        name: "Bob",
        rank: 5
    },
    {
        name: "John",
        rank: 4
    },
    {
        name: "Jane",
        rank: 1
    },
    {
        name: "Sam",
        rank: 3
    },
    {
        name: "Betty",
        rank: 2
    }
];


function orderByRank(a, b) {
    if (a.rank < b.rank)
        return -1;
    if (a.rank > b.rank)
        return 1;
    return 0;
}
objects.sort(orderByRank);

function calculateRankAverages(objects) {
    var rankTotal = 0;
    objects.forEach(function (object) {
        rankTotal = rankTotal + object.rank;
    });

    var average = rankTotal / objects.length;
    return average;
}
calculateRankAverages(objects);
