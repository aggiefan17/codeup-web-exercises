// /*
//  * Complete the TODO items below
//  */
// const users = [
//   {
//     name: 'zach',
//     email: 'zach@codeup.com',
//     languages: ['javascript', 'bash']
//   },
//   {
//     name: 'ryan',
//     email: 'ryan@codeup.com',
//     languages: ['clojure', 'javascript']
//   },
//   {
//     name: 'luis',
//     email: 'luis@codeup.com',
//     languages: ['java', 'scala', 'php']
//   },
//   {
//     name: 'fernando',
//     email: 'fernando@codeup.com',
//     languages: ['java', 'php', 'sql']
//   },
//   {
//     name: 'justin',
//     email: 'justin@codeup.com',
//     languages: ['html', 'css', 'javascript', 'php']
//   }
// ];
//
// // TODO: fill in your name and email and add some programming languages you know
// // to the languages array
// // TODO: replace the `var` keyword with `const`, then try to reassign a variable
// // declared as `const`
// const me =
//     {
//         name: 'terry',
//         email: 'aggiefan17@yahoo.com',
//         languages: ['html', 'css', 'javascript']
//     };
//
// // TODO: rewrite the object literal using object property shorthand
// const {name, email, languages} = users.push(me);
//
// // // TODO: replace `var` with `let` in the following variable declarations
// let emails = [];
// let names = [];
//
// // // TODO: rewrite the following using arrow functions
// users.forEach((user) => {
//   return emails.push(user.email);
// });
//
// users.forEach((user) => {
//   return names.push(user.name);
// });
//
//
// // // TODO: replace `var` with `let` in the following declaration
// let developers = [];
// users.forEach(function(user) {
// //   // TODO: rewrite the code below to use object destructuring assignment
//   //       note that you can also use destructuring assignment in the function
//   //       parameter definition
//
//   const { name, email, languages } = user;
//
// //   // TODO: rewrite the assignment below to use template strings
//   developers.push(`${name} 's email is  ${email}. ${name} knows ${languages.join(', ')}.`);
// });
//
// console.log(developers);
//
// // // TODO: Use `let` for the following variable
// let list = '<ul>';
//
// // // TODO: rewrite the following loop to use a for..of loop
//
// for (let developer of developers){
// //   // TODO: rewrite the assignment below to use template strings
//   list += `<li> ${developer} </li>`;
// };
// list += '</ul>';
// console.log(list);
//
// document.body.innerHTML = list;


//Map, Filter, and Reduce Exercises

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],

    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

const usersFiltered = users.filter(function (user) {
    if (user.languages.length >= 3) {
      return true
    }
});

console.log(usersFiltered);


const userEmailsArr = users.map(function (user) {
    return user.email;
});

console.log(userEmailsArr);




const newUsersObject = users.reduce(function(accumulator, {id, name, email, languages}) {
    accumulator[id] = {
      name,
      email,
      languages
    };
    return accumulator;
}, {});

console.log(newUsersObject);


    // {

  // 1: {
  //     name: 'ryan',
  //     email: 'ryan@codeup.com',
  //     languages: ['clojure', 'javascript']
  // },
  // 2: {
  //     name: 'luis',
  //     email: 'luis@codeup.com',
  //     languages: ['java', 'scala', 'php']
  // },
  // 3: {
  //     name: 'zach',
  //     email: 'zach@codeup.com',
  //     languages: ['javascript', 'bash']
  // }
  //     ...
// };


