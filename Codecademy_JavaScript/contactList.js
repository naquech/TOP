//A simple contact list with objects and arrays

//contact object: and object within an object
var friends = {
    bill:{
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 123-4567",
        address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
        },
    steve:{
        firstName: "Steve",
        lastName: "Jobs",
        number: "(415) 001-9988",
        address: ['1 Infinite Loop', 'Cupertino', 'CA', '95014']
        },
    liz:{
        firstName: "Liz",
        lastname: "Davis",
        number: "(802) 795-8899",
        address: ['123 Porters Point Rd', 'Colchester', 'VT', '05446']
        },
    ana:{
        firstName: "Ana Maria",
        lastName: "Quintero",
        number: "(574) 321-1522",
        address: ['Carrera 21 #5-12', 'Medellin', 'COLOMBIA', '05001000']
        }
    };

//funtion to print out all the entries in 'friends' object
var list = function (obj){
    for (var objectName in friends){
        console.log(objectName);
    }
};

list(friends);

//search function
var search = function (name){
    for (var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key]
            }
        }
    };

search("Liz");