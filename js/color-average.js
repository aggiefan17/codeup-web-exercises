"use strict";

function averageColors(color1, color2) {
    var hexAverage;
    var decColor1 = parseInt(color1, 16);
    var decColor2 = parseInt(color2, 16);

    console.log(decColor1);
    console.log(decColor2);

    var avg = Math.round(((decColor1 + decColor2) / 2));
    console.log(avg);

    hexAverage = (avg).toString(16);
    console.log(hexAverage);
    return  hexAverage;

}
averageColors("ffffff", "000000");
