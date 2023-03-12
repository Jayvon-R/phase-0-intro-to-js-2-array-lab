// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop(2)
}

function destructivelyRemoveFirstCat(){
    cats.shift(0)
}

function appendCat(name){
    var catNew = [...cats];
    catNew.push("Broom")
    return catNew
}

function prependCat(name){
    var catNew = ["Arnold", ...cats];
    return catNew
}

function removeLastCat(){
    var catNew = cats.slice(0, cats.length - 1)
    return catNew
}

function removeFirstCat(){
    var catNew = cats.slice(-2)
    return catNew
}

