
//
const buyChocolate = () => {
    const newChocolate = {
        type: 'Milk Chocolate'
    }
    return newChocolate
}

const chocolate = buyChocolate()

const addFlavoring = (candy) => {
    candy.flavor = 'strawberry'
    return candy
}


const makeBarkMixture = (candy) => {
    if (candy.flavor === 'Mint') {
        candy.mixed = true
    }
    else {
        candy.mixed = false
    }
    return candy
}

const bakeCandy = (candy) => {
    if (candy.mixed === true) {
        candy.baked = true
    }
    else {
        candy.baked = false
    }
    return candy
}

const breakBark = (candy) => {
    if (candy.baked === true) {
        return ["Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece",
        "Mint Chocolate Bark Piece"]
    }
    else {
        return candy
    }
}


console.log(addFlavoring(chocolate))
console.log(makeBarkMixture(chocolate))
console.log(bakeCandy(chocolate))
console.log(breakBark(chocolate))