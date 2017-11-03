// 1. Write a function, deactivateMembers()
// to take in the following array of objects as an input:

    var members = [
        {
            joined: 2009,
            name: "John",
            activeMember: true
        },
        {
            joined: 2011,
            name: "Sally",
            activeMember: true
        },
        {
            joined: 2013,
            name: "John",
            activeMember: true
        },
    ];
// The function should return an output of the same array of objects with all activeMember properties set to false
// and contain an additional property of dateDeactivated set to 2017.




function deactivateMembers(arr) {

    arr.forEach(function(memberObj) {
    memberObj.activeMember = false;
    memberObj.dateDeactivated = 2017;

    });
    return arr;
}

console.log(deactivateMembers(members));