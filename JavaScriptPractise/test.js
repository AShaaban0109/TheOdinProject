// console.log('a');
// console.log('b');
// debugger;
// console.log('c');

// let arr = ["I", "study", "JavaScript", "right", "now"];

// console.log(arr.slice(1,3));

// console.log(arr);

// // remove 2 first elements
// let removed = arr.splice(1, 2);

// console.log( removed ) // "I", "study" <-- array of removed elements

// console.log(arr);

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
// //   let user = users.find(item => item.id == 1);
//   let user = users.find((item, index) => index == 1);
  
//   console.log(user.name); // John


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   let coolUsers = users.filter(item => item.id >1)
//   console.log(coolUsers);

// let characters = ["Bilbo", "Gandalf", "Nazgul"]
// // let lengths = characters.map(item => item.length);
// let lengths = characters.map(function (item) {return item.length});
// console.log(characters);
// console.log(lengths)

let arr = [ 1, 2, 15];

arr.sort(function(a, b) { return a- b; });

console.log(arr);  // 1, 2, 15