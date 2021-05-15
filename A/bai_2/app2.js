let team = [{
    name: "Arsenal",
    points: 99,
    GD: 45
},
{
    name: "Chelsea",
    points: 75,
    GD: 39
},
{
    name: "Manchester United",
    points: 60,
    GD: 29
},
{
    name: "Liverpool",
    points: 88,
    GD: 39
},
];
let point = [];
let rank = 0;
// Sap xep theo thu tu
team.sort(function(a,b) {
    if( b.points === a.points) {
        if (b.GD === a.GD) {
            return a.name.localeCompare(b.name);
        } else {
            return b.GD - a.GD;
        }
    } else {
        return b.points - a.points
    }
});

// Them rank
for (let i = 0; i< team.length; i++) {
    rank = i + 1;
    team[i].rank = rank;
}
console.log(team);


