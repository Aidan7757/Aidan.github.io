// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

const toggleDrum = (stringArray, indexNumber) => {
    if (indexNumber > 15 || indexNumber < 0) {
        return "Invalid operation."
    } else if (stringArray === "kicks") {
        if (kicks[indexNumber] === false) {
            kicks[indexNumber] = true;
        } else {
            kicks[indexNumber] = false;
        }
    } else if (stringArray === "snares") {
        if (snares[indexNumber] === false) {
            snares[indexNumber] = true;
        } else {
            snares[indexNumber] = false;
        }
    } else if (stringArray === "hiHats") {
        if (hiHats[indexNumber] === false) {
            hiHats[indexNumber] = true;
        } else {
            hiHats[indexNumber] = false;
        }
    } else if (stringArray === "rideCymbals") {
        if (rideCymbals[indexNumber] === false) {
            rideCymbals[indexNumber] = true;
        } else {
            rideCymbals[indexNumber] = false;
        }
    } else {
        return "Invalid operation.";
    }
}

const clear = (stringArray) => {
    if (stringArray === "kicks") {
        for (let i = 0; i < kicks.length; i++) {
            kicks[i] = false;
        }
    } else if (stringArray === "snares") {
        for (let i = 0; i < kicks.length; i++) {
            snares[i] = false;
        }
    } else if (stringArray === "hiHats") {
        for (let i = 0; i < kicks.length; i++) {
            hiHats[i] = false;
        }
    } else if (stringArray === "rideCymbals") {
        for (let i = 0; i < kicks.length; i++) {
            rideCymbals[i] = false;
        }
    } else {
        return "Invalid operation."
    }
}

const invert =  (stringArray) => {
    if (stringArray === "kicks") {
        for (let i = 0; i < kicks.length; i++) {
            if (kicks[i] === false) {
                kicks[i] = true;
            } else {
                kicks[i] = false;
            }
        }
    } else if (stringArray === "snares") {
        for (let i = 0; i < snares.length; i++) {
            if (snares[i] === false) {
                snares[i] = true;
            } else {
                snares[i] = false;
            }
        }
    } else if (stringArray === "hiHats") {
        for (let i = 0; i < hiHats.length; i++) {
            if (hiHats[i] == false) {
                hiHats[i] = true;
            } else {
                hiHats[i] = false;
            }
        }
    } else if (stringArray === "rideCymbals") {
        for (let i = 0; i < rideCymbals.length; i++) {
            if (rideCymbals[i] == false) {
                rideCymbals[i] = true;
            } else {
                rideCymbals[i] = false;
            }
        }
    } else {
        return "Invalid operation.";
    }
}
