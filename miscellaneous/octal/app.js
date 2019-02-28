'use strict';

function printOctal() {

    // let age = 010;// fails in strict mode    

    let age = 0o010; // rocks in strict mode

    console.log(age);
}

printOctal();