function receivesAFunction(fn) {
    console.log(fn())
}
function returnsANamedFunction() {
    return function innerFunction(){

    }
}
function returnsAnAnonymousFunction() {
    return function () {

    }
}