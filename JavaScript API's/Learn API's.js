 let stopwatch = {}

stopwatch.currentTime = 12

stopwatch.tellTime = function(time) {
    console.log(`The Current time is ${time}.`)
}

stopwatch.tellTime(stopwatch.currentTime)


let pizza1 = {}

pizza.color = "brown";
pizza.flavor = "cheese";
pizza.shape = "round";
pizza.taste = "great";

pizza.cook = function (time) {
    console.log(`the cook time is ${time}.`)
}

pizza.cook()


function MakeCar(carMake, carModel, carColor, carName) {
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.name = carName

    this.lock = function(){
        alert(`lcoked ${this.model} now.`)
    }
}


let benz = new MakeCar('benz1', '1990', 'black', 'bbeeen')

benz.lock()


function Pizza(color, size, topping, crest) {
    this.color = color
    this.size = size
    this.topping = topping
    this.crest = crest

    this.delivery = function(){
        console.log('Pizza delivered in one hour' + size)
    }
}

let pizza1  = new Pizza('brown', 'large', 'tomato', 'thin')


pizza1.delivery()

let x = prompt ('enter a drink name')
let cocktailName = x

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+ cocktailName)
.then(res => res.json ())
.then(data => {
    console.log(data)
    
    
   
})
.catch(err => {
    console.log(`error ${err}`)
})

class Espresso {
    constructor(size, value, type, color){
        this.size = size
        this.value = value
        this.type = type
        this.color = color
    }
    make(){
        console.log("latte")
    }
    heat(){
        console.log("100degree")

    }
    start(){
        console.log("at 6:00 am")

    }
}


let espressoOne = new Espresso("large", "200", "high", "red")

espressoOne.make()



