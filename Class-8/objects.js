let person1={
    name : 'Adam',
    Age : 25,
    Phone_No : 9876543210,
    OwnsACar : true

}

console.log(person1)

let person2={
    name : 'Steve',
    Age : 24,
    Phone_No : 8976543210,
    OwnsACar : true
}

console.log(person2)

// dot Notation

console.log(person1.name)
console.log(person2.Phone_No)

// bracket Notation

console.log(person2['Age'])

// Arrays 

let arr = [1,2,3,'Scaler', null, true,4,5]
console.log(arr)

// Objects

const CaptionAmerica = {
    name : 'Steve Rogers',
    age : 104,
    allies : ['tony Stark', 'Bucky Barnes', 'Bruce banner'],
    Address : {
        country : 'USA',
        city : {
            name:'Brooklyn',
            pincode:123456,

        },
    },
    isAvenger : true,

}

console.log(CaptionAmerica.Address.city.name)
console.log(CaptionAmerica.allies[2])

CaptionAmerica.movies=['winter soldier', 'civil war', 'Endgame']
console.log(CaptionAmerica.movies)

delete CaptionAmerica.age
console.log(CaptionAmerica)

const person01 = {
    name : 'Steve',
    Age : 23
}

const person02 = person01

person02.name = 'Adam'

console.log(person01)

console.log(person02)


