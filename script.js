
sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];
// debugger;
fruits = [];
summerSports = sports.slice(5,11);
winterSports = sports.slice(0, 5);
fruits = fruits.concat(summerSports.splice(2, 2));
fruits = fruits.concat(winterSports.splice(2, 1));


console.log("*** Winter sports ***");
for(i = 0; i < winterSports.length; i++) {
        console.log(`${winterSports[i].join(": ")}`);
}

console.log("*** Summer sports ***");
for(i = 0; i < summerSports.length; i++) {
    console.log(` ${summerSports[i].join(": ")}`);
    }

console.log("*** Fruits ***");
for(i = 0; i < fruits.length; i++) {
    console.log(` ${fruits[i].join(": ")}`);
}


