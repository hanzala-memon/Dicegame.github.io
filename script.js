// var firstName = 'Hanzala Memon';

// document.write(firstName);










//********/ variable mutation and type coercieon *//





// var firstName = 'Hanzala';
// var age = 23;


// document.write(firstName + ' is ' + age);


// var job, isMarried;
// job = 'Teacher';
// isMarried = false;


// document.write(firstName + ' is a ' + age + ' years old ' + job + '. is he married? ' + isMarried + '<br>');


// age = 'twenty three';
// job = 'Web developer';


// alert(firstName + ' is a ' + age + ' years old ' + job + '. is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');

// document.write(firstName + ' ' + lastName);



//********/ Basic operators *//



// var year, yearHan, yearArqam;


// math operators//

// year = 2023;
// ageHanzala = 23;
// ageArqam = 25;








// yearHan = year - 23 * 2;
// yearArqam = year - 25;


// document.write(yearHan + '<br>');


// document.write(yearArqam + '<br>');


// logical operators//


// var older = ageHanzala < ageArqam;

// document.write(older + '<br>');



// typeof operators//


// document.write(typeof older + '<br>');
// document.write(typeof ageArqam + '<br>');
// document.write(typeof 'Mark is older' + '<br>');
// var x;
// document.write(typeof x + '<br>');




/* operator precedence */


// var now = 2023;
// var yearHanzala = 1990;
// var fullAge = 23;

// var isFullAge = now - yearHanzala >= fullAge;

// document.write(isFullAge);



// var ageHan = now - yearHanzala;
// var ageArq = 25;
// var average = (ageHan + ageArq) / 2;

// document.write(average);



// multiple assigment


// var x, y;
// x = y = (3 + 5) * 4 - 6;
// document.write(x, y);



// // more operators


// x *= 2;
// document.write(x);
// x += 20;
// document.write(x);
// x -= 30;
// document.write(x);
// x /= 2;
// document.write(x);
// x--;
// document.write(x);



// lecture: operators

// var now = 2023;

// var birthYear = now - 23;


// birthYear = now - 23 * 2;

// document.write(birthYear);







// var age = 32;

// if(age < 30) {
//     document.write('Hanzala is teenager');
// } else if (age > 20 && age <35) {
//     document.write('Hanzala is a young man');
// } else{
//     document.write('Hanzala is a man');
// }




// var job = 'teacher';

// job = prompt('What does Hanzala do?');

// switch (job) {
//     case 'teacher':
//     console.log('hanzala teaches kids');
//     break;
//     case 'driver':
//         console.log('Hanzala drive a cab in karachi');
//         break;
//         case 'cop':
//             console.log('Hanzala helps fight crime');
//             break;
//             default:
//                 console.log('Hanzala do something else');
// }






// challenge 1


// var massMark = 80;  
// var markHeight = 1.80;

// var massJhon = 85;
// var jhonHeight = 2;



// var BMIMark = massMark / (markHeight * markHeight);
// var BMIJhon = massJhon / (jhonHeight * jhonHeight);

// console.log(BMIMark, BMIJhon);

// var markHigherBMI = BMIMark > BMIJhon;

// console.log('Is mark\'s BMI higher then jhon\'s ' + markHigherBMI);







//challenge 2



// var hanzalaHeight = 190;
// var arqamHeight = 190;


// var ageHanzala = 23;
// var ageArqam = 25;

// var scoreHanzala = hanzalaHeight + 5 * ageHanzala;
// var scoreArqam = arqamHeight + 5 * ageArqam;
//console.log(scoreArqam, scoreHanzala);


// if(scoreArqam > scoreHanzala) {
//     console.log('Arqam wins the game with ' + scoreArqam + ' points');
// } else if(scoreArqam < scoreHanzala) {
//     console.log('Hanzala wins the game with ' + scoreHanzala + ' points');
// } else{
//     console.log('there is a draw.');
// }




// var ukashaHeight = 220;
// var ageukasha = 17;


// var scoreUkasha = ukashaHeight + 5 * ageukasha;


// if(scoreHanzala > scoreArqam && scoreHanzala > scoreUkasha) {
//     console.log('Hanzala wins the game with ' + scoreHanzala + ' points');
// }else if(scoreArqam > scoreHanzala && scoreArqam > scoreUkasha) {
//     console.log('Arqam wins the game with ' + scoreArqam + ' points');
// }else if (scoreUkasha > scoreHanzala && scoreUkasha > scoreArqam) {
//     console.log('Ukasha wins the game with ' + scoreUkasha + ' points');
// }else{
//     console.log('This is draw');
// }







//functions


/*function calculateAge(yearOfBorth) {
    var age = 2023 - yearOfBorth;
    return age;
}

var ageHanzala = calculateAge(2000);
var ageArqam = calculateAge(1998);
var ageUkasha = calculateAge(2005);



function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement >= 0){
        console.log(name + ' retires in ' + retirement + ' years.');
    }else{
        console.log(name + ' is already retired.');
    }     
}



yearsUntilRetirement('Hanzala', 2000);
yearsUntilRetirement('Arqam', 1998);
yearsUntilRetirement('Ukasha', 2005);
*/



// challenge 3

// var jhonGame1 = 89;
// var jhonGame2 = 120;
// var jhonGame3 = 103;


// var mikeGame1 = 116;
// var mikeGame2 = 94;
// var mikeGame3 = 123;


// var jhonScoreCalculate = (89 + 120 + 103) / 3;
// var mikeScoreCalculate = (116 + 94 + 123) / 3;

// console.log(jhonScoreCalculate, mikeScoreCalculate);

/*
if(mikeScoreCalculate > jhonScoreCalculate) {
    console.log('Mike wins the game with highest ' + mikeScoreCalculate + ' average score.');
}else if(jhonScoreCalculate > mikeScoreCalculate) {
    console.log('Jhon wins the game with highest ' + jhonScoreCalculate + ' average score.');
}else{
    console.log('match has been draw.');
}
*/



//lecture: arrey

/*
var names = ['Hanzala', 'Arqam', 'Ukasha'];
var years = [2000, 1998, 2005];

console.log(names);

names[1] = 'Abdullah';
console.log(names);

var hanzala = ['Hanzala', 'Yousuf', 2000, 'Web Developer'];

hanzala.push('Crickter');
hanzala.unshift('Mr.');
hanzala.pop();
hanzala.shift();

console.log(hanzala);

alert (hanzala.indexOf(2000));
*/


// lecture: object

/*
var hanzala = {
    name: 'Hanzala',
    lastName: 'Yousuf',
    job: 'Web Development',
    age: 23,
    salary: 12000
};

console.log(hanzala['job']);


var xyz = 'age';

console.log(hanzala[xyz]);

hanzala.lastName = 'Memon';
hanzala['job'] = 'Programmer';

console.log(hanzala);


var arqam = new Object();
arqam.name = 'Arqam';
arqam.lastName = 'Yousuf';
arqam.job = 'Accountent';
arqam['age'] = 25;

console.log(arqam);
*/



// functions


/*
function calculateAge (birthYear) {
    return 2023 - birthYear;
}

var agejhon = calculateAge(1995);
var agemike = calculateAge(1990);
var agecoco = calculateAge(2000);

console.log(agejhon, agemike, agecoco);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years.')
}


yearsUntilRetirement(2000, 'Hanzala');
yearsUntilRetirement(2010, 'Ukasha');
yearsUntilRetirement(1985, 'M.Yosuf');
*/


// function expression

/*
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
        return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in karachi';
        case 'designer':
            return firstName + ' designe beautifull website';
            default:
                return firstName + ' does something else';
    }
}


console.log(whatDoYouDo('teacher', 'Hanzala'));
console.log(whatDoYouDo('designer', 'Arqam'));
console.log(whatDoYouDo('driver', 'Ukasha'));
*/



// for loops



// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }



//var names = ['Hanzala', 'Bilal', 'Usama', 'Arqam', 'Abdullah', 'Ukasha'];

// for (var i = 5; i >= 0; i--) {
//     console.log(names[i]);
// }


// while loops


// var i = 5;
// while(i >= 0) {
//     console.log(names[i]);
//     i--
// }



// for (var i = 1; i <= 5; i++) {
//     console.log(i);

//     if(i === 3){
//         break;
//     }
// }





// for (var i = 1; i <= 5; i++) {
//     if(i === 3){
//         continue;
//     }


//     console.log(i);

// }



//challenge no3




/*
var years = [2000, 2001, 2002, 2003, 2014];


function printFullAge(years) {

var ages = [];
var fullAges = [];

for (var i = 0; i < years.length; i++) {
    ages[i] = 2023 - years[i];
}

for (var i = 0; i < ages.length; i++) {
    if(ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
        fullAges.push(true);
    }else{
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
        fullAges.push(false);
    }
}

return fullAges;

}

var years = [2000, 2001, 2002, 2003, 2014];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1910, 1999]);
*/



// challenge 4



/*
function tipCalculator(bill) {
    var percentage;

    if(bill < 50){
        percentage = .2;
    }else if(bill >= 50 && bill < 200){
        percentage = .15;
    }else{
        percentage = .1;
    }
    return percentage * bill;
}




var bills = [124, 48, 268];
var tips = [
    tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];

var finalValues = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];


console.log(tips, finalValues);
*/



// objects

/*
var hanzala = {
    firstName: 'Hanzala',
    lastName: 'Yousuf',
    birthYear: 2000,
    family: ['Arqam', 'Abdullah', 'Ukasha', 'Usama'],
    job: 'Web Developer',
    isMarried: false
};


console.log(hanzala.firstName);
console.log(hanzala['lastName']);
var x = 'birthYear';

console.log(hanzala[x]);

hanzala.job = 'Graphic';
hanzala['isMarried'] = true;
console.log(hanzala);


// new object syntex

var arqam = new Object();
arqam.firstName = 'Arqam';
arqam.birthYear = 1998;
arqam['lastName'] = 'Yousuf';
console.log(arqam);
*/



/*
var hanzala = {
    firstName: 'Hanzala',
    lastName: 'Yousuf',
    birthYear: 2000,
    family: ['Arqam', 'Abdullah', 'Ukasha', 'Usama'],
    job: 'Web Developer',
    isMarried: false,
    calcAge: function() {
        this.age = 2023 - this.birthYear;
    }
};

hanzala.calcAge();
console.log(hanzala);
*/




//var BMIMark = massMark / (markHeight * markHeight);
// var BMIJhon = massJhon / (jhonHeight * jhonHeight);



// var jhon = {
//     fullName: 'Jhon Smith',
//     mass: 80,
//     height: 6.5,
//     calcBMI: function() {
//        this.bmi = this.mass / (this.height * this.height);
//        return this.bmi;
//     }
// };

//console.log(jhon.calcBMI(80, 6.5));


/*
var coco = {
    fullName: 'Coco Smith',
    mass: 50,
    height: 4.5,
    calcBMI: function() {
       this.bmi = this.mass / (this.height * this.height);
       return this.bmi;
    }
};


if(jhon.calcBMI() > coco.calcBMI()) {
    console.log(jhon.fullName + ' has a higher BMI of ' + jhon.bmi);
}else if(coco.bmi > jhon.bmi) {
    console.log(coco.fullName + ' has a higher BMI of ' + coco.bmi);
}else{
    console.log('There is a draw');
}
*/


// challenge 5

/*

var jhon = {
    fullName: 'Jhon Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];


            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }


            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;

        }
    }
}









var coco = {
    fullName: 'Coco Smith',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];


            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }


            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;

        }
    }
}



function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}



coco.calcTips();
jhon.calcTips();


coco.average = calcAverage(coco.tips);
jhon.average = calcAverage(jhon.tips);


console.log(coco, jhon);


if(coco.average > jhon.average) {
    console.log(coco.fullName + '\'s family pays higher tips, with an average of $' + jhon.average);
}else if (jhon.average > coco.average) {
    console.log(jhon.fullName + '\'s family pays higher tips, with an average of $' + coco.average);
}else{
    console.log('Both have same average');
}

*/


// const date = new Date();

// console.log(date.getTime());



// let seconds = Math.floor (1684855186473 / 1000);

// let minutes = Math.floor (1684855186 / 60);

// let hours = Math.floor (28080919 / 60);

// let time = Math.floor (468015 / 24);


// console.log(seconds);
// console.log(minutes);
// console.log(hours);
// console.log(time);






