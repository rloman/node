

const dogBark = name => {
    return () => {
        console.log(`The dog with name ${name} has barked ... `)
    }
}

const prepareDogBarkWodan = dogBark('wodan')

prepareDogBarkWodan();

