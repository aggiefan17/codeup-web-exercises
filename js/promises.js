
{
    "use strict";


function wait () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .1) {
                resolve("Here is your number");
            } else {
                reject("Request failed");
            }
        }, 1000);
    });
};

console.log(wait());


    function wait () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > .1) {
                    resolve("Here is your number");
                } else {
                    reject("Request failed");
                }
            }, 3000);
        });
    };

    console.log(wait());



const myPromise = fetch("https://api.github.com/users/aggiefan17/events", {headers: {'Authorization': 'token 95abd7df9d143aafa039e554e037160e41841429'}});
myPromise
    .then(response => response.json())
    .then(data => console.log(data[0]))
    .catch(error => console.log(error));



}