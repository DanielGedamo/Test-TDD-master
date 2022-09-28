export function getMyName() {
    return "hello shlomo";
}

export function getHelloWithFirstName(firstName) {
    return `hello ${firstName}`;
}

export function getTwoNumberAndReturnMax(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    }
    else {
        return numberTwo;
    }

}
export function getTwoNumberAndReturnFirstNumberPartialSecondNumber(numberOne, numberTwo) {
    return (numberOne / numberTwo)
}