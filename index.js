const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push('Ralph')
}

function destructivelyPrependCat() {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat() {
    const catsNew = [...cats, "Broom"]
    return catsNew
}

function prependCat() {
    const catsNew = ["Arnold", ...cats]
    return catsNew
}

function removeLastCat() {
    const catsNew = cats.slice(0,2)
    return catsNew
}

function removeFirstCat() {
    const catsNew = cats.slice(1)
    return catsNew
}