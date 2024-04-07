
//write the functions using the filter()
//findMatching() takes an array and a string as arguments
//returns the matching list of drivers, 
//returns matching drivers if case doesnt match but letters do
//return empty array if no match
//fuzzyMatch() takes array and string as argument for querying the array
//returns all drivers who begin with the provided letters
//doesnt return if only middle or ending letters match

//matchName() takes array of drivers and a string as arugments
//each driver Object has 2 properties: name and hometown
//return each element whose name property matches the provided string argument

function findMatching(drivers, string1) {

    const matches = drivers.filter((match) => string1.toLowerCase() === match.toLowerCase());
    return matches;
}

console.log(findMatching(["jim", "beam"], "jim"));

function fuzzyMatch(drivers, string1) {

    const matchLet = drivers.filter((firstL) => firstL.toLowerCase().startsWith(string1.toLowerCase()));
    return matchLet;
}
console.log(fuzzyMatch(["jim", "beam"], "J"));

function matchName(drivers, string1) {
    const matchingName = drivers.filter((doubleName) => doubleName.name === string1);
    return matchingName;
}
console.log(matchName([{name: "Jim", hometown: "Baltimore"}], "J"));