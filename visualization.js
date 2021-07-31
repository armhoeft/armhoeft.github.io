const SUMMER_DATA = await d3.csv("https://github.com/armhoeft/armhoeft.github.io/blob/main/data/summer.csv");
const WINTER_DATA = await d3.csv("https://github.com/armhoeft/armhoeft.github.io/blob/main/data/winter.csv");

function groupData(data, groupBy) {
    const groups = {};
    data.forEach(function(d, i){
        const k = d[groupBy];
        groups[k] || (groups[k] = []);
        groups[k].push(d);
    });
    return data;
}